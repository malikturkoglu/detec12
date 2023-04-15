import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'



export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
     
        <Main />
        <NextScript />
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">ZEMHEREX</a>. All Rights Reserved. 
      This webpage is only accessible to project workers. Please exit the site if you are not a project employee. 
      The site s new features may be troublesome for you. M
    </span>
    </div>
    <script src="/ym.js"/>
    <div><img src="https://mc.yandex.ru/watch/93234692" style={{ position:"absolute" , left:"-9999px"}} alt="" /></div>
</footer>
      </body>
    </Html>
  )
}
// üç nokta commit all
// git push -u origin main
