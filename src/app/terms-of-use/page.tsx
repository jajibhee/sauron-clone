export const metadata = {
  title: "Terms of Use | Sauron",
  description: "Terms and conditions for using Sauron's website and services",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-background py-20">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Sauron Industries, Inc. - Website Terms of Use
        </h1>
        <p className="text-muted-foreground mb-10">Last revised: October 30th, 2024</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            These Sauron Industries Website Terms and Conditions of Use(the "Terms") govern your use any
            websites that are owned or operated by Sauron Industries, Inc. ("Sauron," "we," "us" or "our"),
            and which contain a link to the Terms (collectively, and together with all services available
            through such websites, the "Site"). By accessing the Site, you agree to be bound by the Terms.
            If you do not agree to the Terms, please exit the Site immediately and do not access any of
            the associated pages or materials. Please consult the Sauron Privacy Notice for a description
            of our privacy practices and policies on the Site.
          </p>

          <p>
            Sauron owns and/or operates the Site, and we reserve the right, in our sole discretion, to
            change, modify, add or remove any portion of this Site or the Terms, whether in whole or in
            part, at any time and for any reason. Changes to the Terms will be effective when posted.
            You agree to review the Terms periodically to be aware of any changes. Your continued use
            of this Site after any changes to the Terms will be considered acceptance of those changes.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">PERMITTED USE</h2>
          <p>
            You agree that you are authorized to visit, view and use the information on the Site for personal,
            informational, and non-commercial purposes only. You are prohibited from duplicating, downloading,
            publishing, modifying or otherwise distributing, in whole or in part, any content and materials on
            the Site(including, without limitation, any text and images resident on the Site) without Sauron's
            express written permission. All pages and any material contained on the Site are the property of Sauron,
            or are owned by a third party and are used by Sauron under license, and are protected by U.S. and
            international copyright and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">LIMITED LICENSE</h2>
          <p>
            Sauron grants you a limited, non-exclusive, revocable and non-transferable license to utilize and
            access the Site pursuant to the requirements and restrictions contained in these Terms. Sauron may,
            in its sole discretion, change, suspend or discontinue any aspect of the Site at any time. We may
            also impose limits on certain services or restrict access to all or certain portions of the Site,
            without notice or liability. Sauron does not grant any express or implied right to you under any patents,
            trademarks, copyrights or trade secret information; and you shall have no right, either directly or
            indirectly, to own, use, loan, sell, rent, lease, license, sublicense, assign, copy, translate, modify,
            adapt, improve or create any new or derivative works from, or display, distribute, perform or in any way
            exploit the Site or any of its contents (including software) in whole or in part. You agree to not disrupt,
            interrupter attempt to interrupt the operation of the Site in anyway, including, without limitation,
            changing or deleting any proprietary notice from any materials downloaded from the Site.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">VIOLATIONS OF THE TERMS</h2>
          <p>
            You understand and agree that Sauron may, in its sole discretion, with or without prior notice,
            terminate your access to the Site and/or exercise any other available remedy if we determine that
            you have violated (i) any provision of the Terms; (ii) Sauron's rights; (iii) the rights of third
            parties or (iv) any applicable laws or regulations. You acknowledge and agree that monetary damages
            may not adequately compensate Sauron for your non-compliance with the Terms, and you therefore consent
            to injunctive or other equitable relief in the case of such violations. You further agree that Sauron
            may release certain information about you if we are required to do so by applicable laws or a valid subpoena.
          </p>

          <p className="mt-12 text-muted-foreground">
            Full terms and conditions are available upon request. Please contact{" "}
            <a href="mailto:concierge@sauron.systems" className="text-foreground hover:text-primary">
              concierge@sauron.systems
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
}
