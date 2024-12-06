import { LottiePlayer8 } from "@/components/lottiejson";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ContactUs() {
  return (
    <div className="">
      <Header />
      <div className="flex mt-[-50px] justify-center">
        <LottiePlayer8 />
      </div>
    <section className="bg-amber-950 rounded-xl w-1/2 mx-auto">
      <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" className="block p-3 w-full text-sm text-white bg-amber-100 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-amber-900 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-amber-100 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-amber-900 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-white bg-amber-100 rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-amber-900 dark:placeholder-gray-200 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600  dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
      </section>
      <Footer />
    </div>
  );
}
