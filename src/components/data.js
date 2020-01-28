import donationIcon from "../images/monetary-donations.svg"
import giftCards from "../../src/images/gift-cards.svg"
import amazon from "../../src/images/amazon-logo.svg"
import adopt from "../../src/images/adopt.svg"
import ghscat from "../images/ghs-cat.jpg"
import ghslogo from "../images/UBi-MRmE_400x400.png"

const data = [
              { component: "main-card",
                title: "How you can help",
                src: ghscat,
                alt: "rescued-cat",
                summary: "In mid-January 2020, the Guelph Humane Society had rescued 97 cats from a Guelph apartment. The organization is trying their best to provide care to all the cats but they need help! The total cost of taking all these cats will be a minimum of $20 000. Cash donations are the most needed but there are many other ways you can help too!",
                linkOneText: "Read More",
                linkOne: "https://kitchener.ctvnews.ca/guelph-home-had-97-cats-inside-not-80-humane-society-1.4782280",
                linkTwoText: "Donate Online",
                linkTwo: "https://guelphhumane.ca/donate-online/"
              },
              {
                component: "header",
                src: ghslogo,
                alt: "guelph-humane-society-logo",
              },
              { component: "ways-to-help",
                containers: [{
                              title: "Cash Donations",
                              src: donationIcon,
                              alt: "monetary-donations",
                              desc: "Our number one need in order to continue the high-level of care every animal that comes into our shelter receives. For donations over $20 you will receive a donation receipt! You can donate online or by visiting 500 Wellington Street West or call 519-824-3091. $25 covers one day of care for one kitty $80 covers a wellnes exam, every cat needs one $150 covers basic medical care (vaccinations, parasite control, spay/neuter)",
                              buttonText: "Donate Online",
                              buttonLink: "https://guelphhumane.ca/donate-online/"
                            },
                            {
                              title: "Gift Cards",
                              src: giftCards,
                              alt: "gift-cards",
                              desc: "Allow us to address our urgent needs right away. We always need gift cards, new or partially used: Local pet stores, Grocery stores, Staples, Walmart, Dollar stores, Canadian Tire, Home Depot, Amazon",
                            },
                            {
                              title: "Amazon Wishlist",
                              src: amazon,
                              alt: "amazon",
                              desc: "This wishlist has all the items that the shelter could benefit from. Don't forget that items more than $20 (before taxes & shipping) can be eligible for an donation tax receipt! For more information please email adoptions@guelphhumane.ca.",
                            },
                            {
                              title: "Adopt",
                              src: adopt,
                              alt: "adopt",
                              desc: "Consider adopting or even fostering! Some of their animals are on their website but for more information head on over to 500 Wellington Street West.",
                              buttonText: "Take a look at our animals up for adoption!",
                              buttonLink: "https://guelphhumane.ca/adopt/available-animals/"
                            },
                          ]
                
              }
]

export default data