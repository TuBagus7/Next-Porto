import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          {/* <Link href="/"></Link> */}
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={35}
            height={35}
            style={{ borderRadius: "50px" }}
          />
        </div>
        <div className="nav-links">
          <Link href="/">
            <Image
              src="https://png.pngtree.com/element_our/sm/20180515/sm_5afb1035655ac.jpg"
              alt="Home"
              width={25}
              height={25}
              style={{ borderRadius: "50px" }}
            />
          </Link>
          <Link href="/about">
            <Image
              src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-information-vector-icon-png-image_963973.jpg"
              alt="Home"
              width={27}
              height={27}
              style={{ borderRadius: "50px" }}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
