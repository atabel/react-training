const Greeting = ({to}) => (
	<div>hello {to}</div>
);

ReactDOM.render(
  <Greeting to="Abel" />,
  document.getElementById('app')
);
