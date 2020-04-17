import { RouteProps } from 'react-router-dom'

/**
 * Liskov substitution
 * Extend simple route interface if needed
 */
export interface ExtendedRoute extends RouteProps {
  z?: string
}
