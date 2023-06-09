import { Link } from "react-router-dom";
import "./../styled/MainPage.scss";

const ItemContainer = () => {
  const itemList = [
    {
      img: "https://img-cf.kurly.com/shop/data/goods/1653034942160l0.jpeg",
      title: "[삼삼물산X이태리식탁] 크림 새우 그라탕",
      pay: 7900,
      review: "999+",
    },
    {
      img: "https://img-cf.kurly.com/shop/data/goods/1657676902390l0.jpg",
      title: "[농협풍산김치] 깻잎김치 500g",
      pay: 11000,
      review: "999+",
    },
    {
      img: "https://img-cf.kurly.com/shop/data/goods/159719883649l0.jpg",
      title: "[뚝심] 진한 갈비홍탕",
      pay: 10900,
      review: "999+",
    },
    {
      img: "https://img-cf.kurly.com/shop/data/goods/1601002334585l0.jpg",
      title: "[프레지덩] 스프레더블 치즈",
      pay: 5500,
      review: "999+",
    },
  ];
  return (
    <div className="ItemContainer-main">
      <section className="recommend-wrapper">
        <div className="main">
          <div className="title">이 상품 어때요?🎁</div>
          <div className="items">
            <div className="item">
              {itemList.map((it) => (
                <div className="explain-one">
                  <Link to="/item" style={{ textDecoration: "none" }}>
                    <div className="explain-img">
                      <img src={it.img} />
                    </div>
                  </Link>
                  <div className="explain">
                    <div>{it.title}</div>
                    <div>{it.pay}</div>
                    <div>{it.review}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemContainer;
