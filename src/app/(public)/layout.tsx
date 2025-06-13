import ThemeModeToggle from "@/component/app-reusables/button/theme-mode-toggle";
import SubscribeToNewsletter from "@/component/page-splits/contactForm/subscribe";
import FooterMenu from "@/component/app-reusables/footer";
import NavMenu from "@/component/app-reusables/nav-menu";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full text-sm  bg-white dark:bg-dark-ash-500">
      <NavMenu />
      {children}
      {/* subscribe section */}
      <section className="w-full flex justify-center flex-col items-center transition-all bg-secondary text-white">
        <div className=" w-full  max-w-screen-xl px-5 lg:px-10 my-24 flex flex-col items-center gap-12">
          <div className="w-full max-w-5xl text-center flex flex-col items-center gap-5">
            <h2 className=" text-center text-3xl font-bold">
              Subscribe to our newsletter
            </h2>
            <p>Be the first to get the latest updates from AnonymizeCare</p>
          </div>
          <SubscribeToNewsletter />
        </div>
      </section>
      {/* footer  */}
      <FooterMenu />
      <div className=" fixed bottom-10 right-16 z-50">
        <ThemeModeToggle />
      </div>
    </main>
  );
}
