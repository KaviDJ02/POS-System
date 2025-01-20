const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h3", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {}, [
            React.createElement("h1", {}, "Pixel Perfect Pizzas"),
            React.createElement(Pizza, {
                name: "Chicken",
                description: "Large"
            }),
            React.createElement(Pizza, {
                name: "Fish",
                description: "Small"
            }),
            React.createElement(Pizza, {
                name: "Cheese",
                description: "Large X 2"
            }),
            React.createElement(Pizza, {
                name: "Pepperoni",
                description: "Medium"
            }),
        ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));