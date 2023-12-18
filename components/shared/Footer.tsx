import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h5 className="h5-bold">NextEvents</h5>
        </Link>

        <p>2023 NextEvents. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
