// components/Prototypes.jsx
import useActions from "../hooks/useAction";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototype() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          const click = () => {
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id + Math.random()}>
              <a href={pieUrl} rel="noreferrer">
                <div style={{ padding: "25px 0 33px 0" }}>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus"></i>
                  </div>

                  {title}

                  <p className="prototype__price">$ {price}</p>
                  <p className="prototype__desc">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
