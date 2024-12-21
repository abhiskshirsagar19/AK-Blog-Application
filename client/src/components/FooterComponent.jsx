import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsMedium,
  BsTwitter,
} from "react-icons/bs";
export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="gird w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-br from-pink-500 via-orange-400 to-orange-500 rounded-md text-white">
                AK's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-clos-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ak's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/abhiskshirsagar19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/abhishek-kshirsagar-aab43916a/?trk=eml-email_job_alert_digest_01-header-0-profile_glimmer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://medium.com/@abhikshirsagar1999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex  sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ak's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            {/* <Footer.Icon href="" icon={BsInstagram} /> */}
            <Footer.Icon
              href="https://www.linkedin.com/in/abhishek-kshirsagar-aab43916a/?trk=eml-email_job_alert_digest_01-header-0-profile_glimmer"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://github.com/abhiskshirsagar19"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://medium.com/@abhikshirsagar1999"
              icon={BsMedium}
            />
            <Footer.Icon href="https://x.com/AbhiK1919" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
