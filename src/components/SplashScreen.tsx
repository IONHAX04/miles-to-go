import logoVertic from '../assets/logo/logo_vertic.png'

export function SplashScreen() {
  return (
    <div className="app-splash" role="status" aria-live="polite" aria-label="Loading website">
      <div className="app-splash__logo-wrap">
        <img src={logoVertic} alt="Miles to Go" className="app-splash__logo" />
      </div>
    </div>
  )
}
