import Image from "next/image"
import myImg from '@/app/images/image-omelette.jpeg'
export default function RecipePage() {
  return (
    <div className="container">
      <Image src={myImg} alt="an "></Image>
      <h1>Simple Omelette Receipe</h1>
      <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      <div className="Red-cotainer">
        <span>Preparation time</span>
        <ul>
          <li>Total: Approximately 10 minutes</li>
          <li>Preparation: 5 minutes</li>
          <li>Cooking: 5 minutes</li>
        </ul>
      </div>
      <h1>Ingredients</h1>
      <ul>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
      <br />
      <h1>Instructions</h1>
      <ol>
        <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
        <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
        <li> Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
        <li>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
        <li> Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
        <li> Enjoy: Serve hot, with additional salt and pepper if needed.
        Nutrition</li>
      </ol>
      <h1>Nutritions</h1>
      <p>The table below shows nutritional values per serving wihout the additional fillings</p>
      <table>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>277 kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>22g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>22g</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
