import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import {ThemeBtn, Card} from "./components/Component";

function App() {
  const [themeMode,setThemeMode] = useState("dark");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const element  = document.querySelector('html').classList;

    element.remove("light","dark");
    element.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

      <div className=" w-full flex flex-wrap min-h-screen justify-center items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
