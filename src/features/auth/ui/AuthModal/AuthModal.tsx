import {useEffect, useState} from "react";
import type {FormEvent} from "react";
import {useAuthStore} from "@/features/auth/model/useAuthStore.ts";
import {useAuthModalStore} from "@/features/auth/model/useAuthModalStore.ts";
import Modal from "@/shared/ui/Modal";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import Checkbox from "@/shared/ui/Checkbox";
import './AuthModal.scss'

type AuthMode = 'login' | 'register'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const AuthModal = () => {
  const isOpen = useAuthModalStore((state) => state.isOpen)
  const close = useAuthModalStore((state) => state.close)
  const login = useAuthStore((state) => state.login)

  const [mode, setMode] = useState<AuthMode>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setPassword('')
    setConfirm('')
    setAgree(false)
    setError('')
  }

  const handleClose = () => {
    close()
    resetForm()
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
    resetForm()
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedEmail = email.trim()
    const trimmedName = name.trim()

    if (!emailPattern.test(trimmedEmail)) return setError('Enter a valid email')
    if (password.length < 6) return setError('Password must be at least 6 characters')

    if (mode === 'register') {
      if (trimmedName.length < 2) return setError('Name must be at least 2 characters')
      if (password !== confirm) return setError('Passwords do not match')
      if (!agree) return setError('Accept the terms to continue')
    }

    login({
      name: mode === 'register' ? trimmedName : trimmedEmail.split('@')[0],
      email: trimmedEmail,
    })
    handleClose()
  }

  return (
    <Modal
      className="auth-modal"
      animation="fade"
      isOpen={isOpen}
      ariaLabel="Authorization"
      onClose={handleClose}
    >
      <div className="auth-modal__header">
        <h2 className="auth-modal__title">
          {mode === 'login' ? 'Sign in' : 'Sign up'}
        </h2>
        <Button
          label="Close"
          isLabelHidden
          mode="transparent"
          iconName="close"
          iconPosition="before"
          onClick={handleClose}
        />
      </div>

      <form className="auth-modal__form" onSubmit={handleSubmit} noValidate>
        {mode === 'register' && (
          <Input
            type="text"
            name="name"
            placeholder="Username"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        )}
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {mode === 'register' && (
          <>
            <Input
              type="password"
              name="confirm"
              placeholder="Repeat password"
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
            />
            <Checkbox
              label="I agree to the terms of service"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
          </>
        )}

        {error && <p className="auth-modal__error">{error}</p>}

        <Button
          type="submit"
          label={mode === 'login' ? 'Sign in' : 'Create account'}
        />
      </form>

      <p className="auth-modal__switch">
        {mode === 'login' ? 'No account?' : 'Have an account?'}
        <Button
          label={mode === 'login' ? 'Sign up' : 'Sign in'}
          mode="transparent"
          onClick={switchMode}
        />
      </p>
    </Modal>
  )
}

export default AuthModal