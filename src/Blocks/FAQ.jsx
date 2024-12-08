import React from "react";
import Card_FAQ from "../Components/Card_FAQ";

const FAQ = () => {
  return (
    <div id="FAQ" className="flex flex-col shared-padding">
      <div>
        <h2 className="text-center my-10">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div className="flex flex-col gap-4 md:w-[70%] md:self-end ">
        <Card_FAQ
          question={"What is an NFT??"}
          answer={
            "An NFT (non-fungible token) is a unique digital item stored on a blockchain, which serves as a record of ownership. It can represent anything from art to in-game items or memberships. NFTs are stored on decentralized blockchains, meaning they are verified and accessible across a distributed network of computers, ensuring their authenticity and ownership are secure. This makes NFTs a modern solution for digital ownership and provenance."
          }
        />
        <Card_FAQ
          question={"How do NFTs work?"}
          answer={
            "An NFT (non-fungible token) is a unique digital item stored on a blockchain. NFTs can represent almost anything, and serve as a digital record of ownership. Art NFTs are unique digital assets that represent artworks, such as paintings or drawings. They are stored on a blockchain, making them traceable and verifiable. These NFTs allow collectors to buy, sell, and own digital art, often with additional rights, such as commercial use of the artwork. Each art NFT is one-of-a-kind, linking directly to its creator, which adds value and uniqueness."
          }
        />
        <Card_FAQ
          question={"What are NFTs used for?"}
          answer={
            <ul className="list-disc list-inside">
              <li>
                <strong>Art NFTs:</strong> Represent digital art, offering a
                unique, traceable connection to the creator.
              </li>
              <li>
                <strong>Photography NFTs:</strong> Digital assets of
                photographs, stored on the blockchain to verify authenticity and
                ownership, offering artists a new way to sell and collectors a
                verifiable item.
              </li>
              <li>
                <strong>Profile Picture NFTs (PFPs):</strong> Used as avatars or
                online identities, often with community access benefits.
              </li>
              <li>
                <strong>Music NFTs:</strong> Represent ownership of music or
                related experiences like concerts.
              </li>
              <li>
                <strong>Digital Collectibles:</strong> Encompass trading cards,
                in-game items, and memorabilia.
              </li>
            </ul>
          }
        />
        <Card_FAQ
          question={
            "What are the advantages of using blockchains for art NFTs?"
          }
          answer={
            <ul className="list-disc list-inside">
              <li>
                Authenticity and Provenance: They create verifiable records of
                ownership and history, enhancing transparency.
              </li>
              <li>
                Ownership and Control: Artists and collectors have greater
                control over how art is used, displayed, and sold.
              </li>
              <li>
                Liquidity: Blockchain records provide a transparent and
                efficient market for art buying and selling.
              </li>
              <li>
                Accessibility: Artists can easily reach a global audience by
                sharing digital copies, expanding access for collectors.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
