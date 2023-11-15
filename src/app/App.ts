import { AppConfig } from "./AppConfig"
import { AppHome } from "./AppHome"

export class App {
  home = new AppHome()
  config = new AppConfig()
}
