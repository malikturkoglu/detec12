import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
      <script src="/ym.js"></script>  
        <Main />
        <NextScript />
        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">ZEMHEREX</a>. All Rights Reserved. 
      This webpage is only accessible to project workers. Please exit the site if you are not a project employee. 
      The site s new features may be troublesome for you.
    </span>
    </div>
</footer>
      </body>
    </Html>
  )
}
