import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-gray-900 dark:text-white">
      <div className="absolute top-8 right-8">
        <ThemeToggle />
      </div>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Project AKILLI</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300">
        <span className="font-bold">Vision:</span>  Using Tech to make Education and Healthcare more accessible in Africa.
        </p>
        
        <p className="text-md text-gray-600 dark:text-gray-400">
        I came to the U.S. two years ago to study at Dartmouth College, but I grew up in Benin and spent my entire life in its education system. I&apos;ve experienced its failures firsthand. Access to education is limited—half of my country&apos;s population is illiterate, and this reality is common across many African nations. We must change that.

        We live in a time where the world is being reshaped by technology, yet my continent is still suffering from fundamental gaps in education and healthcare. I know many people who cannot go to school because they either cannot afford it or struggle to understand the material. Our languages are excluded from education. People die because they lack access to basic healthcare.

        This has to change. I want to use my knowledge to be part of the solution. Right now, my focus is on education. How can we leverage technology to make education truly accessible? It's time to act.


        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Changelog</h2>
        <ul className="list-disc list-inside text-md text-gray-600 dark:text-gray-400">
          <li>2025-02-17: Initial website launch 🚀</li>
          {/* <li>2025-02-20: Defined project goals</li>
          <li>2025-03-01: Started partnerships & collaborations</li> */}
        </ul>
        
        <Link
          className="mt-6 inline-block px-6 py-3 text-sm font-semibold text-white bg-black rounded-lg dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300"
          href="https://josue.godeme.com"
          target="_blank"
          rel="noopener noreferrer"

        >
          Visit My Personal Website
        </Link>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Akilli. All rights reserved.
      </footer>
    </div>
  );
}




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
