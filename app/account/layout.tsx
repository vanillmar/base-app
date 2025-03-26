import { Suspense } from 'react'
import AccountSettingsPage from './page'
import AccountSettingsPageLoading from './loading'

export default function AccountSettingsLayout() {
  return (
    <Suspense fallback={<AccountSettingsPageLoading />}>
      <AccountSettingsPage />
    </Suspense>
  )
}
