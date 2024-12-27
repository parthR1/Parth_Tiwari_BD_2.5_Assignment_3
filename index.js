const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Array of hotel objects
let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

// Given hotel objects array, sort the hotel objects by price, low-to-high (ascending order by price).
function sortByPriceLowToHigh(hotel1, hotel2) {
  return hotel1.price - hotel2.price;
}

// Given hotel objects array, sort the hotel objects by price, high-to-low (descending order by price).
function sortByPriceHighToLow(hotel1, hotel2) {
  return hotel2.price - hotel1.price;
}

// Given hotel objects array, sort the hotel objects by rating, low-to-high (ascending order by rating).
function sortByRatingLowToHigh(hotel1, hotel2) {
  return hotel1.rating - hotel2.rating;
}

// Given hotel objects array, sort the hotel objects by rating, high-to-low (descending order by rating).
function sortByRatingHighToLow(hotel1, hotel2) {
  return hotel2.rating - hotel1.rating;
}

// Given hotel objects array, sort the hotel objects by reviews, least-to-most (ascending order by reviews).
function sortByReviewsLeastToMost(hotel1, hotel2) {
  return hotel1.reviews - hotel2.reviews;
}

// Given hotel objects array, sort the hotel objects by reviews, most-to-least (descending order by reviews).
function sortByReviewsMostToLeast(hotel1, hotel2) {
  return hotel2.reviews - hotel1.reviews;
}

// Given a hotels array element of type object and desired hotel amenity as arguments, check if amenity of hotel object matches with the desired amenity.
function filterByAmenity(eleObj, desiredAmenity) {
  return eleObj.amenity.toLowerCase() === desiredAmenity.toLowerCase();
}

// Given a hotels array element of type object and desired country as arguments, check if country of hotel object matches with the desired country.
function filterByCountry(eleObj, desiredCountry) {
  return eleObj.country.toLowerCase() === desiredCountry.toLowerCase();
}

// Given a hotels array element of type object and desired category as arguments, check if category of hotel object matches with the desired Category.
function filterByCategory(eleObj, desiredCategory) {
  return eleObj.category.toLowerCase() === desiredCategory.toLowerCase();
}

// Endpoint 1: Sort hotels by pricing (ascending order by pricing)
app.get('/hotels/sort/pricing', (req, res) => {
  let pricingOrder = req.query.pricing;

  let sortedHotels = hotels.slice();

  if (pricingOrder === 'low-to-high') {
    sortedHotels.sort(sortByPriceLowToHigh);
  } else if (pricingOrder === 'high-to-low') {
    sortedHotels.sort(sortByPriceHighToLow);
  } else {
    console.log(`INVALID Pricing Order: ${pricingOrder}`);
  }

  res.json({ hotels: sortedHotels });
});

// Endpoint 2: Sort hotels by rating (ascending order by rating)
app.get('/hotels/sort/rating', (req, res) => {
  let ratingOrder = req.query.rating;

  let sortedHotels = hotels.slice();

  if (ratingOrder === 'low-to-high') {
    sortedHotels.sort(sortByRatingLowToHigh);
  } else if (ratingOrder === 'high-to-low') {
    sortedHotels.sort(sortByRatingHighToLow);
  } else {
    console.log(`INVALID Pricing Order: ${ratingOrder}`);
  }

  res.json({ hotels: sortedHotels });
});

// Endpoint 3: Sort hotels by reviews (ascending order by reviews)
app.get('/hotels/sort/reviews', (req, res) => {
  let reviewsOrder = req.query.reviews;

  let sortedHotels = hotels.slice();

  if (reviewsOrder === 'least-to-most') {
    sortedHotels.sort(sortByReviewsLeastToMost);
  } else if (reviewsOrder === 'most-to-least') {
    sortedHotels.sort(sortByReviewsMostToLeast);
  } else {
    console.log(`INVALID Reviews Order: ${reviewsOrder}`);
  }

  res.json({ hotels: sortedHotels });
});

// Endpoint 4: Given an array of hotels (each element is an object), return only the hotels having amenity same as desired amenity given as query param.
app.get('/hotels/filter/amenity', (req, res) => {
  let desiredAmenity = req.query.amenity;

  let filteredHotels = hotels.filter((eleObj) =>
    filterByAmenity(eleObj, desiredAmenity)
  );

  res.json({ hotels: filteredHotels });
});

// Endpoint 5: Given an array of hotels (each element is an object), return only the hotels having country same as desired country given as query param.
app.get('/hotels/filter/country', (req, res) => {
  let desiredCountry = req.query.country;

  let filteredHotels = hotels.filter((eleObj) =>
    filterByCountry(eleObj, desiredCountry)
  );

  res.json({ hotels: filteredHotels });
});

// Endpoint 6: Given an array of hotels (each element is an object), return only the hotels having category same as desired category given as query param.
app.get('/hotels/filter/category', (req, res) => {
  let desiredCategory = req.query.category;

  let filteredHotels = hotels.filter((eleObj) =>
    filterByCategory(eleObj, desiredCategory)
  );

  res.json({ hotels: filteredHotels });
});

// Endpoint 5: Given an array of hotels (each element is an object), return the array in original form
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
