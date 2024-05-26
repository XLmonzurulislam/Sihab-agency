const product = [
  {
      id: 0,
      image: 'assets/img/member/a.jpg',
      name: 'Monzurul islam',
      work: 'Developer',
      bio: "if you can leave all, you will succes, without you can't succes",
      twiter: "www.x.com",
      facebook: 'www.facebook.com',
      insta: 'www.insta.com',
      linkedin: 'www.linkedin.com',
      tel: '01602472756',
  },
  {
    id: 0,
    image: 'assets/img/member/a.jpg',
    name: 'Monzurul islam',
    work: 'Developer',
    bio: "if you can leave all, you will succes, without you can't succes",
    twiter: "www.x.com",
    facebook: 'www.facebook.com',
    insta: 'www.insta.com',
    linkedin: 'www.linkedin.com',
    tel: '01602472756',
},
{
  id: 0,
  image: 'assets/img/member/a.jpg',
  name: 'Monzurul islam',
  work: 'Developer',
  bio: "if you can leave all, you will succes, without you can't succes",
  twiter: "www.x.com",
  facebook: 'www.facebook.com',
  insta: 'www.insta.com',
  linkedin: 'www.linkedin.com',
  tel: '01602472756',
},





];

























const categories = [...new Set(product.map((item) => { return item }))]

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
      var {name, image, work, bio, twiter, facebook, insta, linkedin, number="01602472756", tel } = item;
      return (
          `<div class="col-lg-6 mt-4">
          <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
            <div class="pic"><img src=${image} class="img-fluid" alt=""></div>
            <div class="member-info">
              <h4>${name} </h4>
              <span>${work} </span>
              <p>${bio} </p>
              <div class="social">
                <a target="_blank" href="${twiter}"><i class="ri-twitter-fill"></i></a>
                <a target="_blank" href="${facebook}"><i class="ri-facebook-fill"></i></a>
                <a target="_blank" href="${insta}"><i class="ri-instagram-fill"></i></a>
                <a target="_blank" href="${linkedin}"> <i class="ri-linkedin-box-fill"></i> </a>
                <a target="_blank" href="tel:${number}"> <i class="ri-phone-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      )
  }).join('')
};
displayItem(categories);