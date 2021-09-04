import Image from "next/image";
import Header from "../components/Header";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div>
          <Image
            src="/static/images/Prime-day-banner.png"
            width={1020}
            height={250}
            objectFit="contain"
          />
        </div>
        {/* right */}
      </main>
    </div>
  );
}

export default Checkout;
