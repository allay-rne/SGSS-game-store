import {fallbackGames} from "@/entities/game/model/fallbackGames.ts";
import {getGamesByIds} from "@/entities/game/lib/getGamesByIds.ts";
import {useCartStore} from "@/features/cart/model/useCartStore.ts";
import {useLibraryStore} from "@/features/library/model/useLibraryStore.ts";
import {useFavoriteStore} from "@/features/favorite/model/useFavoriteStore.ts";
import Button from "@/shared/ui/Button";
import './Cart.scss'

const Cart = () => {
  const ids = useCartStore((state) => state.ids)
  const remove = useCartStore((state) => state.remove)
  const clear = useCartStore((state) => state.clear)
  const addToLibrary = useLibraryStore((state) => state.add)
  const removeFromFavorites = useFavoriteStore((state) => state.removeMany)

  const handleCheckout = () => {
    addToLibrary(ids)
    removeFromFavorites(ids)
    clear()
  }

  const games = getGamesByIds(fallbackGames, ids)
  const total = games.reduce((sum, game) => sum + game.price, 0)

  return (
    <div className="cart">
      <div className="cart__content">
        <h1 className="cart__title">Your cart ({games.length})</h1>

        {games.length === 0 ? (
          <div className="cart__empty">
            <p className="cart__empty-text">Your cart is empty</p>
            <Button
              label="Continue shopping"
              href="/shop"
            />
          </div>
        ) : (
          <div className="cart__body">
            <div className="cart__main">
              <ul className="cart__list">
                {games.map((game) => (
                  <li
                    className="cart__item"
                    key={game.id}
                  >
                    <img
                      className="cart__item-img"
                      src={game.background_image}
                      alt={game.name}
                      loading="lazy"
                    />
                    <p className="cart__item-title">{game.name}</p>
                    <p className="cart__item-price">
                      {game.price === 0 ? 'Free' : `${game.price}$`}
                    </p>
                    <Button
                      className="cart__item-remove"
                      label="Remove"
                      mode="transparent"
                      onClick={() => remove(game.id)}
                    />
                  </li>
                ))}
              </ul>
              <div className="cart__actions">
                <Button
                  label="Continue shopping"
                  mode="transparent"
                  href="/shop"
                />
                <Button
                  label="Remove all"
                  mode="transparent"
                  onClick={clear}
                />
              </div>
            </div>

            <aside className="cart__summary">
              <div className="cart__summary-row">
                <span>Total</span>
                <span className="cart__summary-total">{total}$</span>
              </div>
              <Button
                label="Proceed to checkout"
                onClick={handleCheckout}
              />
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart