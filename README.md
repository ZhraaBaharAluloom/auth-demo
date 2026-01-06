# Storing and Managing Auth Token with Expo SecureStore

Now that we have the token from the login function, we need to store it so that refreshing the app doesn't log the user out every time.

We'll use **Expo SecureStore** ([docs](https://docs.expo.dev/versions/latest/sdk/securestore/)) to securely store the token on the device. Inshallah, we all know how to read documentation; Inshallah ya3ni. 🙂

---

## 1. Install SecureStore

Install the package using the command from the Expo SecureStore documentation.

---

## 2. Create Storage File

Inside the `api/` folder, create a new file `api/storage.ts`.

---

## 3. Add Token Functions

Inside `storage.ts`, add three functions to manage the token:

- `storeToken` – store the token securely
- `getToken` – retrieve the token when needed
- `deleteToken` – remove the token when it expires or when the user logs out

_(Refer to the Expo Secure Store page on Notion for exact implementation. ☺️)_

---

## 4. Store Token on Login

Call `storeToken` when the user successfully logs in.  
Take a moment to locate the screen where the login function is handled and integrate it there.

---

## 5. Check Token on App Launch

In the root `_layout.tsx`:

1.  Create a state:
    I guess you know how to create a state?

```ts
const [isAuthenticated, setIsAuthenticated] = useState(null);
```

2.  Create an async function to check for the token:

```ts
const checkToken = async () => {
  // 1. get your token using getToken()
  // 2. Add your condition here
};
```

3.  Run this function once on app launch using useEffect:

```ts
useEffect(() => {
  //   Call the function above
}, []);
```

4.  Handle the nullable value of isAuthenticated on first launch.

---

## 6. Make Auth State Global

Since other components don’t know about this state, we need to make it global:

1.  Create a folder at the root: `utils/`
2.  Inside `utils/`, create `AuthContext.tsx`
3.  Create a context to manage `isAuthenticated` globally
4.  Wrap the root layout with `AuthContext.Provider`
5.  Pass `isAuthenticated` and `setIsAuthenticated` to the provider
6.  Use `setIsAuthenticated` in `login`/`signup` to update the global state:
    ```ts
    const { setIsAuthenticated } = useContext(AuthContext);
    ```

---

## 7. Protect Routes

1.  Create a folder `protect/` inside the `app` folder
2.  Wrap your routes in the main layout with `<Stack.Protected guard={}>` and set the `guard` prop with the `isAuthenticated` value.

### 🎉 Tada!

Everything should now work. If not, grab a coffee or tea, take a walk, and enjoy the vibes. :)
