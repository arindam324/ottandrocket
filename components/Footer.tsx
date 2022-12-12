import React from "react";

const Footer: React.FC<{ isSticker?: boolean }> = ({ isSticker }) => {
  return (
    <footer
      className={`w-full ${
        !isSticker && "absolute bottom-0"
      }  h-16 items-center mt-auto flex justify-center text-xl font-semibold text-white bg-[#131428]`}
    >
      Copyright Otter and Rocket Limited. | Manage Subscription
    </footer>
  );
};

export default Footer;
