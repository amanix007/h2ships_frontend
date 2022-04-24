import Slider from "react-slick";
import { TwitterTweetEmbed } from "react-twitter-embed";

function SocialContent() {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="socialContent container">


      <h1 className="socialContent__title text-center">@H2Ships Tweets</h1>
      <div className="row justify-content-center">
        <Slider {...settings}>
          <div>
            <TwitterTweetEmbed
              tweetId={'1501904917656657922'}
              options={{height: 400}}
            />
          </div>
          <div>
            <TwitterTweetEmbed
              tweetId={'1501904917656657922'}
              options={{height: 400}}
            />
          </div>
          <div>
            <TwitterTweetEmbed
              tweetId={'1501904917656657922'}
              options={{height: 400}}
            />
          </div>
          {/* <div>
          <iframe
            width="550"
            height="350"
            title="Embedded post"
            data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
            src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
          ></iframe>
        </div>
        <div>
          <iframe
            width="550"
            height="350"
            title="Embedded post"
            data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
            src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
          ></iframe>
        </div>
        <div>
          <iframe
            width="550"
            height="350"
            title="Embedded post"
            data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
            src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
          ></iframe>
        </div>
        <div>
          <iframe
            width="550"
            height="350"
            title="Embedded post"
            data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
            src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
          ></iframe>
        </div>
        <div>
          <iframe
            width="550"
            height="350"
            title="Embedded post"
            data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
            src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
          ></iframe>
        </div>
        <div>
          <iframe
            width="550"
            height="350"
            title="Embedded post"
            data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
            src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
          ></iframe>
        </div> */}
        </Slider>
        {/* <div
          id="recipeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="col-md-6 col-12">
                <h3 className="socialContent__cardTitle mb-4">
            <span className="socialContent__cardTitleSpan">Twitter</span>
          </h3>
                <iframe
                  width="550"
                  height="350"
                  title="Embedded post"
                  data-tweet-url="https://twitter.com/H2Ships/status/1501904917656657922"
                  src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3EOur%20partners%20%3Ca%20href%3D%22https%3A//twitter.com/PortofAmsterdam%3Fref_src%3Dtwsrc%255Etfw%22%3E@PortofAmsterdam%3C/a%3E%20are%20cruising%20at%20full%20sail%20right%20now%21%3Cbr%3EThe%20public%20tender%20for%20the%20construction%20of%20the%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/h2%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23h2%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/vessel%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23vessel%3C/a%3E%20%26quot%3BNeo%20Orbis%26quot%3B%20has%20recently%20been%20launched%20and%20is%20open%20until%20April%208th%2C%202022.%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%3Cbr%3EFor%20more%20information%20%26amp%3B%20the%20Neo%20Orbis%20brochure%3A%20%3Ca%20href%3D%22https%3A//t.co/RNHfn1Yfbb%22%3Ehttps%3A//t.co/RNHfn1Yfbb%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/7f38xBJLeU%22%3Epic.twitter.com/7f38xBJLeU%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1501904917656657922%3Fref_src%3Dtwsrc%255Etfw%22%3EMarch%2010%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
                ></iframe>
              </div>
            </div>

            <div className="socialContent__socialFlexItem carousel-item">
              <div className="col-md-6 col-12">
                <h3 className="socialContent__cardTitle mb-4">
            <span className="socialContent__cardTitleSpan">Twitter</span>
          </h3>
                <iframe
                  width="550"
                  height="350"
                  title="Embedded post"
                  data-tweet-url="https://twitter.com/H2Ships/status/1484454959689183235"
                  src="data:text/html;charset=utf-8,%3Cblockquote%20class%3D%22twitter-tweet%22%3E%3Cp%20lang%3D%22en%22%20dir%3D%22ltr%22%3E%3Ca%20href%3D%22https%3A//twitter.com/hashtag/FridayReadingRecommendation%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23FridayReadingRecommendation%3C/a%3E%3Cbr%3EInterview%20with%20Prof.%20%3Ca%20href%3D%22https%3A//twitter.com/ChrisSlootweg%3Fref_src%3Dtwsrc%255Etfw%22%3E@ChrisSlootweg%3C/a%3E%20who%20is%20closely%20working%20with%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/H2SHIPS%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23H2SHIPS%3C/a%3E%20partners%20in%20the%20Netherlands%20%26quot%3BThe%20energy%20transition%20dictates%20that%20research%20must%20be%20a%20hundred%20times%20faster%20than%20usual%21%26quot%3B%3Cbr%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/hydrogen%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23hydrogen%3C/a%3E%20%3Ca%20href%3D%22https%3A//twitter.com/hashtag/shipping%3Fsrc%3Dhash%26amp%3Bref_src%3Dtwsrc%255Etfw%22%3E%23shipping%3C/a%3E%20%3Ca%20href%3D%22https%3A//t.co/2CR1WZdOb4%22%3Ehttps%3A//t.co/2CR1WZdOb4%3C/a%3E%3C/p%3E%26mdash%3B%20Interreg%20NWE%20Project%20-%20H2SHIPS%20%28@H2Ships%29%20%3Ca%20href%3D%22https%3A//twitter.com/H2Ships/status/1484454959689183235%3Fref_src%3Dtwsrc%255Etfw%22%3EJanuary%2021%2C%202022%3C/a%3E%3C/blockquote%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cstyle%3Ehtml%7Boverflow%3Ahidden%20%21important%3B%7D%3C/style%3E"
                ></iframe>
              </div>
            </div>
            <div className="socialContent__socialFlexItem">
         

          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:6878737176016764928"
            height="400"
            width="500"
            frameBorder="0"
            allowFullScreen=""
            title="Embedded post"
            className="shadow rounded socialContent__socialFrame"
          ></iframe>
        </div>
          </div>
          <a
            class="carousel-control-prev bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            class="carousel-control-next bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default SocialContent;
