import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  QuestionMarkCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function Header() {
  // return a dynamic navbar that has a mobile view (Disclosure button) when below specific pixel count
  return (
    <>
      <div className="w-full bg-black py-2 px-4 sm:px-6 lg:px-8 flex align-middle items-center justify-end gap-x-4">
        <Link href="https://www.linkedin.com/in/david-brooks-004900116/">
          <Image
            className=""
            src="/In-White-14@2x.png"
            width="28"
            height="28"
            alt="Logo"
          />
        </Link>

        <Link href="https://github.com/dbrooks24">
          <Image
            className=""
            src="/github-mark-white.svg"
            width="28"
            height="28"
            alt="Logo"
          />
        </Link>
      </div>
    </>
  );
}