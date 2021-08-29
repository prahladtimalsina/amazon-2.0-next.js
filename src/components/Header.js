import Image from "next/image";
function Header() {
  return (
    <header>
      <div>
        {/* top */}
        <div>
          <Image src="/static/images/amazon-logo.png"
           width={150}  height={40}
           
           
           />
        </div>
      </div>

      <div>{/* button */}</div>
    </header>
  );
}

export default Header;
