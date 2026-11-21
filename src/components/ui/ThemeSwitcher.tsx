import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme, type ThemeMode } from '../../features/theme/ThemeProvider'
const choices: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor }
]
export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme()
  return <div className={compact ? 'theme-switcher theme-switcher--compact' : 'theme-switcher'} role='group' aria-label='Appearance theme'>
    {choices.map(({ value, label, icon: Icon }) => <button key={value} type='button' className={theme === value ? 'is-active' : ''} aria-pressed={theme === value} title={label} onClick={() => setTheme(value)}><Icon size={15}/>{!compact&&<span>{label}</span>}</button>)}
  </div>
}
