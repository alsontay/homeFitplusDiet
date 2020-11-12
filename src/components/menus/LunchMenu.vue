<template>
  <div
    class="accordion md-accordion accordion-3 z-depth-1-half"
    id="accordionEx194"
    role="tablist"
    aria-multiselectable="true"
  >
    <ul class="justify-content-center pt-5">
      <i class="fas fa-fish mr-3 fa-2x amber-text"></i>
      <i class="fas fa-carrot mr-3 fa-2x orange-text"></i>
      <i class="fas fa-drumstick-bite mr-3 fa-2x deep-orange-text"></i>
    </ul>

    <h2 id="title" class="text-center text-uppercase red-text py-4 px-3">
      Here are your lunch menus for the day!
    </h2>

    <hr class="mb-0" />

    <div class="rgba-red-slight py-5 px-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8">
          <!--Accordion wrapper-->
          <div
            class="accordion md-accordion accordion-5"
            id="accordionEx5"
            role="tablist"
            aria-multiselectable="true"
          >
            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div class="card-header red accent-1" role="tab" id="heading30">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse30"
                  aria-expanded="true"
                  aria-controls="collapse30"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ recipes[0].title }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse30"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading30"
                data-parent="#accordionEx5"
              >
                <div class="card-body red lighten-5 black-text z-depth-1">
                  <div class="row">
                    <div class="col-4">
                      <img :src="recipes[0].image" alt="" class="img-fluid" />
                    </div>
                    <div class="col-8">
                      <div class="row">
                        <div class="col-4">
                          <div class="row">
                            <div class="col">
                              NUTRIENTS:<br />
                              <p>
                                Calories:
                                {{
                                  recipes[0].nutrition.nutrients[0].amount
                                }}
                                kcal
                              </p>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col">
                              PREPARATION TIME:<br />
                              <p>{{ recipes[0].readyInMinutes }}mins</p>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col">
                              DIET TYPE:<br />
                              <p>{{ recipes[0].diets[0] }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          INGREDIENTS: <br />
                          <div
                            v-for="step in recipes[0].analyzedInstructions[0]
                              .steps"
                            :key="step.number"
                          >
                            <p
                              class="ingList mt-0 mb-0"
                              v-for="ingredient in step.ingredients"
                              :key="ingredient.id"
                            >
                              {{ ingredient.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <router-link to="/lunch"
                          ><button class="btn btn-warning">
                            SELECT
                          </button></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->

            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div class="card-header red accent-1" role="tab" id="heading31">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse31"
                  aria-expanded="true"
                  aria-controls="collapse31"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ recipes[1].title }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse31"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading31"
                data-parent="#accordionEx5"
              >
                <div class="card-body red lighten-5 black-text z-depth-1">
                  <div class="row">
                    <div class="col-4">
                      <img :src="recipes[1].image" alt="" class="img-fluid" />
                    </div>
                    <div class="col-8">
                      <div class="row">
                        <div class="col-4">
                          <div class="row">
                            <div class="col">
                              NUTRIENTS:<br />
                              <p>
                                Calories:
                                {{
                                  recipes[1].nutrition.nutrients[0].amount
                                }}
                                kcal
                              </p>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col">
                              PREPARATION TIME:<br />
                              <p>{{ recipes[1].readyInMinutes }}mins</p>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col">
                              DIET TYPE:<br />
                              <p>{{ recipes[1].diets[0] }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          INGREDIENTS: <br />
                          <div
                            v-for="step in recipes[1].analyzedInstructions[0]
                              .steps"
                            :key="step.number"
                          >
                            <p
                              class="ingList mt-0 mb-0"
                              v-for="ingredient in step.ingredients"
                              :key="ingredient.id"
                            >
                              {{ ingredient.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <router-link to="/lunch"
                          ><button class="btn btn-warning">
                            SELECT
                          </button></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->

            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div class="card-header red accent-1" role="tab" id="heading32">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse32"
                  aria-expanded="true"
                  aria-controls="collapse32"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ recipes[2].title }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse32"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading32"
                data-parent="#accordionEx5"
              >
                <div class="card-body red lighten-5 black-text z-depth-1">
                  <div class="row">
                    <div class="col-4">
                      <img :src="recipes[2].image" alt="" class="img-fluid" />
                    </div>
                    <div class="col-8">
                      <div class="row">
                        <div class="col-4">
                          <div class="row">
                            <div class="col">
                              NUTRIENTS:<br />
                              <p>
                                Calories:
                                {{
                                  recipes[2].nutrition.nutrients[0].amount
                                }}
                                kcal
                              </p>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col">
                              PREPARATION TIME:<br />
                              <p>{{ recipes[2].readyInMinutes }}mins</p>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col">
                              DIET TYPE:<br />
                              <p>{{ recipes[2].diets[0] }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          INGREDIENTS: <br />
                          <div
                            v-for="step in recipes[2].analyzedInstructions[0]
                              .steps"
                            :key="step.number"
                          >
                            <p
                              class="ingList mt-0 mb-0"
                              v-for="ingredient in step.ingredients"
                              :key="ingredient.id"
                            >
                              {{ ingredient.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <router-link to="/lunch"
                          ><button class="btn btn-warning">
                            SELECT
                          </button></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->
          </div>
          <!--/.Accordion wrapper-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DinnerMenu",
  components: {},
  data() {
    return {
      recipes: [
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 4,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 1,
          spoonacularScore: 74,
          healthScore: 37,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 97.28,
          id: 640859,
          title: "Crock Pot Chili with Beans",
          readyInMinutes: 45,
          servings: 12,
          sourceUrl:
            "https://www.foodista.com/recipe/B3R7M7SZ/crock-pot-chili-with-beans",
          image: "https://spoonacular.com/recipeImages/640859-312x231.jpg",
          imageType: "jpg",
          summary:
            'Forget going out to eat or ordering takeout every time you crave American food. Try making Crock Pot Chili with Beans at home. This recipe serves 12. This main course has <b>200 calories</b>, <b>22g of protein</b>, and <b>5g of fat</b> per serving. For <b>97 cents per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. <b>The Super Bowl</b> will be even more special with this recipe. A mixture of pinto beans, to serve: cheese, additional salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 1 person were glad they tried this recipe. It is a good option if you\'re following a <b>gluten free</b> diet. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 74%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/crock-pot-chili-chili-and-beans-102738">Crock Pot Chili Chili and Beans</a>, <a href="https://spoonacular.com/recipes/crock-pot-chili-con-carne-with-beans-145959">Crock Pot Chili Con Carne With Beans</a>, and <a href="https://spoonacular.com/recipes/6th-annual-chili-contest-entry-6-crock-pot-jalapeno-popper-white-chicken-chili-689981">6th Annual Chili Contest: Entry #6 – Crock Pot Jalapeno Popper White Chicken Chili</a>.',
          cuisines: ["American"],
          dishTypes: ["soup", "lunch", "main course", "main dish", "dinner"],
          diets: ["gluten free"],
          occasions: ["super bowl"],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step:
                    "Soak Pinto beans overnight in water, drain and rinse the next morning.",
                  ingredients: [
                    {
                      id: 16043,
                      name: "pinto beans",
                      localizedName: "pinto beans",
                      image: "pinto-beans.jpg",
                    },
                    {
                      id: 14412,
                      name: "water",
                      localizedName: "water",
                      image: "water.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 2,
                  step: "Next add diced onions and tomatoes.",
                  ingredients: [
                    {
                      id: 11529,
                      name: "tomato",
                      localizedName: "tomato",
                      image: "tomato.png",
                    },
                    {
                      id: 11282,
                      name: "onion",
                      localizedName: "onion",
                      image: "brown-onion.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 3,
                  step:
                    "Add chili meat and seasoning packet along with onion powder and garlic powder, stir to mix. Then pour in beef broth. Two cups is plenty you wont completely cover your beans and meat, but during cooking the meat will release quite a bit of juice and fat, adding to the liquid content. We want to make chili, not soup.",
                  ingredients: [
                    {
                      id: 1032027,
                      name: "seasoning mix",
                      localizedName: "seasoning mix",
                      image: "seasoning.png",
                    },
                    {
                      id: 1022020,
                      name: "garlic powder",
                      localizedName: "garlic powder",
                      image: "garlic-powder.png",
                    },
                    {
                      id: 2026,
                      name: "onion powder",
                      localizedName: "onion powder",
                      image: "onion-powder.jpg",
                    },
                    {
                      id: 6008,
                      name: "beef broth",
                      localizedName: "beef broth",
                      image: "beef-broth.png",
                    },
                    {
                      id: 0,
                      name: "beans",
                      localizedName: "beans",
                      image: "kidney-beans.jpg",
                    },
                    {
                      id: 11819,
                      name: "chili pepper",
                      localizedName: "chili pepper",
                      image: "red-chili.jpg",
                    },
                    {
                      id: 1019016,
                      name: "juice",
                      localizedName: "juice",
                      image: "apple-juice.jpg",
                    },
                    {
                      id: 1065062,
                      name: "meat",
                      localizedName: "meat",
                      image: "whole-chicken.jpg",
                    },
                    {
                      id: 0,
                      name: "soup",
                      localizedName: "soup",
                      image: "",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 4,
                  step: "Cook on high for two hours in the Crock Pot.",
                  ingredients: [],
                  equipment: [
                    {
                      id: 404718,
                      name: "slow cooker",
                      localizedName: "slow cooker",
                      image: "slow-cooker.jpg",
                    },
                  ],
                  length: {
                    number: 120,
                    unit: "minutes",
                  },
                },
                {
                  number: 5,
                  step:
                    "Add ketchup and Worcestershire sauce, stir to mix well. Reduce heat to low and continue to cook for 6-8 hours, stirring every couple of hours. Taste an hour or so before serving time and add salt and pepper if needed.",
                  ingredients: [
                    {
                      id: 6971,
                      name: "worcestershire sauce",
                      localizedName: "worcestershire sauce",
                      image: "dark-sauce.jpg",
                    },
                    {
                      id: 1102047,
                      name: "salt and pepper",
                      localizedName: "salt and pepper",
                      image: "salt-and-pepper.jpg",
                    },
                    {
                      id: 11935,
                      name: "ketchup",
                      localizedName: "ketchup",
                      image: "ketchup.png",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 480,
                    unit: "minutes",
                  },
                },
                {
                  number: 6,
                  step:
                    "I love to serve our chili with a batch of Christy Jordans Dixie Cornbread. Its the best cornbread Ive ever eaten.",
                  ingredients: [
                    {
                      id: 18023,
                      name: "cornbread",
                      localizedName: "cornbread",
                      image: "cornbread.jpg",
                    },
                    {
                      id: 11819,
                      name: "chili pepper",
                      localizedName: "chili pepper",
                      image: "red-chili.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/crock-pot-chili-with-beans-640859",
          usedIngredientCount: 1,
          missedIngredientCount: 11,
          likes: 0,
          nutrition: {
            nutrients: [
              {
                title: "Calories",
                amount: 200.247,
                unit: "kcal",
              },
            ],
          },
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 18,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 2,
          spoonacularScore: 73,
          healthScore: 32,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 270.59,
          id: 643857,
          title: "Frittata",
          readyInMinutes: 45,
          servings: 2,
          sourceUrl: "http://www.foodista.com/recipe/SNFFG2VB/frittata",
          image: "https://spoonacular.com/recipeImages/643857-312x231.jpg",
          imageType: "jpg",
          summary:
            'Need a <b>gluten free and vegetarian main course</b>? Frittata could be a spectacular recipe to try. One serving contains <b>418 calories</b>, <b>23g of protein</b>, and <b>28g of fat</b>. For <b>$2.35 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of chili flakes, long stem chives, various mushrooms, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the soy sauce you could follow this main course with the <a href="https://spoonacular.com/recipes/panna-cotta-with-strawberry-vin-santo-sauce-154216">Panna Cotta with Strawberry-Vin Santo Sauce</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 75%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/frittata-di-zucchine-al-forno-baked-frittata-with-zucchini-612039">Frittata di zucchine al forno (Baked Frittata with Zucchini)</a>, <a href="https://spoonacular.com/recipes/frittata-ai-peperoni-bell-pepper-frittata-481398">Frittatan ai peperoni (Bell Pepper Frittata)</a>, and <a href="https://spoonacular.com/recipes/green-frittata-frittata-con-le-erbe-743367">Green Frittata: Frittata con le Erbe</a> for similar recipes.',
          cuisines: [],
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          diets: ["gluten free"],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step:
                    "In a large mixing bowl add six eggs, soy sauce and water and whisk vigorously to incorporate air. (Hint: a large bowl should result in a shallow mixture that more readily allows the air bubbles to develop. An electric hand mixer can reduce a labor.) Set aside",
                  ingredients: [
                    {
                      id: 16124,
                      name: "soy sauce",
                      localizedName: "soy sauce",
                      image: "soy-sauce.jpg",
                    },
                    {
                      id: 14412,
                      name: "water",
                      localizedName: "water",
                      image: "water.png",
                    },
                    {
                      id: 1123,
                      name: "egg",
                      localizedName: "egg",
                      image: "egg.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 405907,
                      name: "mixing bowl",
                      localizedName: "mixing bowl",
                      image: "mixing-bowl.jpg",
                    },
                    {
                      id: 404628,
                      name: "hand mixer",
                      localizedName: "hand mixer",
                      image: "hand-mixer.png",
                    },
                    {
                      id: 404661,
                      name: "whisk",
                      localizedName: "whisk",
                      image: "whisk.png",
                    },
                  ],
                },
                {
                  number: 2,
                  step:
                    "In a ten inch non-stick pan add olive oil and heat over a medium flame.",
                  ingredients: [
                    {
                      id: 4053,
                      name: "olive oil",
                      localizedName: "olive oil",
                      image: "olive-oil.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                },
                {
                  number: 3,
                  step:
                    "Add olive oil and sliced shallots, fry until just approaching transparency",
                  ingredients: [
                    {
                      id: 4053,
                      name: "olive oil",
                      localizedName: "olive oil",
                      image: "olive-oil.jpg",
                    },
                    {
                      id: 11677,
                      name: "shallot",
                      localizedName: "shallot",
                      image: "shallots.jpg",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 4,
                  step:
                    "Add mushrooms, bell pepper, and red pepper flakes stirring frequently until all are tender and shallots show very slight caramelization",
                  ingredients: [
                    {
                      id: 1032009,
                      name: "red pepper flakes",
                      localizedName: "red pepper flakes",
                      image: "red-pepper-flakes.jpg",
                    },
                    {
                      id: 10211821,
                      name: "bell pepper",
                      localizedName: "bell pepper",
                      image: "bell-pepper-orange.png",
                    },
                    {
                      id: 11260,
                      name: "mushrooms",
                      localizedName: "mushrooms",
                      image: "mushrooms.png",
                    },
                    {
                      id: 11677,
                      name: "shallot",
                      localizedName: "shallot",
                      image: "shallots.jpg",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 5,
                  step:
                    "Without removing the contents, deglaze pan with the saki, stirring and scraping the bottom vigorously for 1 minute.",
                  ingredients: [],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                  length: {
                    number: 1,
                    unit: "minutes",
                  },
                },
                {
                  number: 6,
                  step: "Add diced tomatoes and cook for one more minute",
                  ingredients: [
                    {
                      id: 11529,
                      name: "tomato",
                      localizedName: "tomato",
                      image: "tomato.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 7,
                  step:
                    "Giving one last vigorous whisk, add egg mixture to the pan and reduce flame to low. Cover pan with a lid or aluminum foil with the reflective side facing inCheck pan contents frequently. Using a spatula to lift an edge of the frittata will allow you to check the bottom. Your looking for the top to approach firmness and the bottom to become golden brown. Timing is critical.With the top half inch of the frittata still slightly liquid, add shredded cheese, spreading evenly across the surface. Replace cover and cook until cheese melts, approximately 1 minute.Toss chives across the surface and lace with fresh ground black and red pepper to taste",
                  ingredients: [
                    {
                      id: 1011026,
                      name: "shredded cheese",
                      localizedName: "shredded cheese",
                      image: "cheddar-cheese.png",
                    },
                    {
                      id: 11821,
                      name: "red pepper",
                      localizedName: "red pepper",
                      image: "red-pepper.jpg",
                    },
                    {
                      id: 1041009,
                      name: "cheese",
                      localizedName: "cheese",
                      image: "cheddar-cheese.png",
                    },
                    {
                      id: 11156,
                      name: "chives",
                      localizedName: "chives",
                      image: "fresh-chives.jpg",
                    },
                    {
                      id: 1123,
                      name: "egg",
                      localizedName: "egg",
                      image: "egg.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404765,
                      name: "aluminum foil",
                      localizedName: "aluminum foil",
                      image: "aluminum-foil.png",
                    },
                    {
                      id: 404642,
                      name: "spatula",
                      localizedName: "spatula",
                      image: "spatula-or-turner.jpg",
                    },
                    {
                      id: 404661,
                      name: "whisk",
                      localizedName: "whisk",
                      image: "whisk.png",
                    },
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                  length: {
                    number: 1,
                    unit: "minutes",
                  },
                },
                {
                  number: 8,
                  step:
                    "Replace cover and cook for one more minute or until firm on top.Turn off flame and allow to set for two - three minutes.The frittata can be loosened with a large plastic spatula and slid on to a serving plate or served directly from the frying pan using a plastic pie wedge spatula.",
                  ingredients: [],
                  equipment: [
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                    {
                      id: 404642,
                      name: "spatula",
                      localizedName: "spatula",
                      image: "spatula-or-turner.jpg",
                    },
                  ],
                  length: {
                    number: 4,
                    unit: "minutes",
                  },
                },
                {
                  number: 9,
                  step: "Serve with a tossed salad and crusty bread.",
                  ingredients: [
                    {
                      id: 10018029,
                      name: "crusty bread",
                      localizedName: "crusty bread",
                      image: "crusty-bread.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl: "https://spoonacular.com/frittata-643857",
          usedIngredientCount: 1,
          missedIngredientCount: 12,
          likes: 0,
          nutrition: {
            nutrients: [
              {
                title: "Calories",
                amount: 583.284,
                unit: "kcal",
              },
            ],
          },
        },
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 8,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 1,
          spoonacularScore: 63,
          healthScore: 21,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 131.68,
          id: 653238,
          title: "Noodle Free Eggplant and Spinach Lasagna",
          readyInMinutes: 45,
          servings: 6,
          sourceUrl:
            "http://www.foodista.com/recipe/6BJ767ZG/noodle-free-eggplant-and-spinach-lasagna",
          image: "https://spoonacular.com/recipeImages/653238-312x231.jpg",
          imageType: "jpg",
          summary:
            'The recipe Noodle Free Eggplant and Spinach Lasagna could satisfy your Mediterranean craving in roughly <b>45 minutes</b>. One serving contains <b>264 calories</b>, <b>16g of protein</b>, and <b>16g of fat</b>. This recipe serves 6 and costs $1.32 per serving. This recipe is liked by 1 foodies and cooks. Head to the store and pick up spinach, eggplants, basil, and a few other things to make it today. It works well as an affordable main course. It is a good option if you\'re following a <b>gluten free and primal</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/no-noodle-eggplant-lasagna-618304">NO NOODLE EGGPLANT LASAGNA</a>, <a href="https://spoonacular.com/recipes/noodle-less-eggplant-lasagna-170932">Noodle-less Eggplant Lasagna</a>, and <a href="https://spoonacular.com/recipes/spinach-zucchini-noodle-lasagna-563983">Spinach Zucchini Noodle Lasagna</a> for similar recipes.',
          cuisines: ["Mediterranean", "Italian", "European"],
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          diets: ["gluten free"],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Wash and dry eggplant. Slice eggplant the long way.",
                  ingredients: [
                    {
                      id: 11209,
                      name: "eggplant",
                      localizedName: "eggplant",
                      image: "eggplant.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 2,
                  step:
                    "Sprinkle with salt and leave for a while. The longer the better 20 to 30 minutes is great. Do not rinse.Preheat oven to 42",
                  ingredients: [
                    {
                      id: 2047,
                      name: "salt",
                      localizedName: "salt",
                      image: "salt.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404784,
                      name: "oven",
                      localizedName: "oven",
                      image: "oven.jpg",
                    },
                  ],
                  length: {
                    number: 20,
                    unit: "minutes",
                  },
                },
                {
                  number: 3,
                  step: "Roast eggplant for about 10 minutes per side.",
                  ingredients: [
                    {
                      id: 11209,
                      name: "eggplant",
                      localizedName: "eggplant",
                      image: "eggplant.png",
                    },
                  ],
                  equipment: [],
                  length: {
                    number: 10,
                    unit: "minutes",
                  },
                },
                {
                  number: 4,
                  step:
                    "Mix ricotta with chopped basil and oregano. Reserve about 1/3 for garnish.",
                  ingredients: [
                    {
                      id: 2027,
                      name: "oregano",
                      localizedName: "oregano",
                      image: "oregano.jpg",
                    },
                    {
                      id: 1036,
                      name: "ricotta cheese",
                      localizedName: "ricotta cheese",
                      image: "ricotta.png",
                    },
                    {
                      id: 2044,
                      name: "basil",
                      localizedName: "basil",
                      image: "basil.jpg",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 5,
                  step:
                    "Spread about 1/3 of the tomato paste in a square dish. Top with eggplant and 1/2 the ricotta mixture. Top with spinach.",
                  ingredients: [
                    {
                      id: 11887,
                      name: "tomato paste",
                      localizedName: "tomato paste",
                      image: "tomato-paste.jpg",
                    },
                    {
                      id: 11209,
                      name: "eggplant",
                      localizedName: "eggplant",
                      image: "eggplant.png",
                    },
                    {
                      id: 1036,
                      name: "ricotta cheese",
                      localizedName: "ricotta cheese",
                      image: "ricotta.png",
                    },
                    {
                      id: 10011457,
                      name: "spinach",
                      localizedName: "spinach",
                      image: "spinach.jpg",
                    },
                    {
                      id: 0,
                      name: "spread",
                      localizedName: "spread",
                      image: "",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 6,
                  step: "Add more ricotta.",
                  ingredients: [
                    {
                      id: 1036,
                      name: "ricotta cheese",
                      localizedName: "ricotta cheese",
                      image: "ricotta.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 7,
                  step:
                    "Add another layer of eggplant. Top with remaining tomato paste.",
                  ingredients: [
                    {
                      id: 11887,
                      name: "tomato paste",
                      localizedName: "tomato paste",
                      image: "tomato-paste.jpg",
                    },
                    {
                      id: 11209,
                      name: "eggplant",
                      localizedName: "eggplant",
                      image: "eggplant.png",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 8,
                  step:
                    "Bake at 375 uncovered about 15 minutes.Cover with foil. Cook another 15 minutes.Top with shredded cheese. Cook about 3-5 minutes till cheese melts.",
                  ingredients: [
                    {
                      id: 1011026,
                      name: "shredded cheese",
                      localizedName: "shredded cheese",
                      image: "cheddar-cheese.png",
                    },
                    {
                      id: 1041009,
                      name: "cheese",
                      localizedName: "cheese",
                      image: "cheddar-cheese.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404784,
                      name: "oven",
                      localizedName: "oven",
                      image: "oven.jpg",
                    },
                    {
                      id: 404765,
                      name: "aluminum foil",
                      localizedName: "aluminum foil",
                      image: "aluminum-foil.png",
                    },
                  ],
                  length: {
                    number: 35,
                    unit: "minutes",
                  },
                },
                {
                  number: 9,
                  step:
                    "Garnish with remaining basil and cook a few more minutes.",
                  ingredients: [
                    {
                      id: 2044,
                      name: "basil",
                      localizedName: "basil",
                      image: "basil.jpg",
                    },
                  ],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/noodle-free-eggplant-and-spinach-lasagna-653238",
          usedIngredientCount: 1,
          missedIngredientCount: 6,
          likes: 0,
          nutrition: {
            nutrients: [
              {
                title: "Calories",
                amount: 263.659,
                unit: "kcal",
              },
            ],
          },
        },
      ],
    };
  },
};
</script>
s

<style scoped>
#title {
  font-family: "Caveat", cursive;
}

.accordion {
  font-family: "Caveat", cursive;
}

.btn {
  position: absolute;
  bottom: 0px;
  right: 10px;
}

p {
  font-size: 12pt;
  font-family: Arial;
}

.col-8 {
  font-size: 14pt;
}
</style>
