# 1. Implement Product Details Page - Level III

Implement the Product modal as shown in the Figma design file: https://www.figma.com/file/TghrEZgi3nl3t3iZ72Ufmt/Code-Assessment---Final.

Requirements:

- Users should be able to open the product modal from both the homepage and Cart modal, or navigate to a route in the format `/product/:productId`
- Closing the Product modal should take the user to the homepage, no matter where they came from
- No animation is required when switching between active images in the PDP image picker
- Don't worry about wiring up quantity/add to bag buttons
- Our data contains some placeholder.com images for certain image types - this is expected
- No specific loading/404 behavior is required, as long as these events do not lead to an error

# 2. Implement a State Management Library - Level III

Replace our use of React Context with the state management library of your choice (Apollo, Redux, MobX, urql, etc). While you’re at it, please wire up two API integrations. You may choose between GraphQL or REST.

1. Fetch products on app load via `products` GraphQL resolver or `/products` endpoint
2. Calculate cart totals via `cart` GraphQL resolver or `/cart` endpoint

See https://github.com/workco/code-assessment-api for more API documentation.

Requirements:

- Shipping should display "FREE" when the total shipping cost is $0.