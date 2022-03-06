const sequelize = require("../config/connection");
const { Post } = require("../models");

const postData = [
  {
    title: "Professional README Guide",
    content: `A polished GitHub profile is an important part of your public identity as a developer. Why? For one thing, it will most likely be the first place that potential employers look to evaluate your skills and professionalism. And it also allows you to connect with and showcase your work to other developers, which can lead to interesting collaborations.
                     A key component of your profile, and one that many new developers overlook, is the README file that's associated with each respository. A README file acts like a virtual storefront to a repository—it's the first thing that a person sees when they visit a repo on GitHub. But it's also much more than that: README files contain essential information about the repo's project. Thus, the quality of a README file can differentiate a high-quality repo from a low-quality one.
                     There's no one right way to structure a README file. There is one very wrong way, however, and that is to not include a README at all or to create a very sparse one.`,
    user_id: 10,
  },
  {
    title: "Developer Resources",
    content: `Web development is a fast-changing field. New technologies and advancements appear every day, and web developers need ways to stay apprised of these changes.
                     Learning how to code introduces fledgling developers to multiple new languages and concepts over a short period of time. The amount of mental effort required to understand these concepts often leaves little time to form opinions about them, but part of a successful career in technology includes the ability to express opinions about trends in an informed and passionate way. It's important that new developers start practicing and honing this skill as soon as possible.`,
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    content:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    content: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    content: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    content: "https://stanford.edu/consequat.png",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://edublogs.org/non/ligula/pellentesque.js",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    content: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    content: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    content:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    content: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    content: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    content: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    content: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    content: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    content:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
