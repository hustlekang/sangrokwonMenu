export default function Corner({ corner, children }) {
  return (
    <>
      <h1>{children}</h1>
      <ul>
        {corner?.foods ? (
          corner.foods.map((food, idx) => <li key={idx}>{food}</li>)
        ) : (
          <li>closed</li>
        )}
        <li>{corner?.price ? corner.price : null}</li>
      </ul>
    </>
  );
}
