var NavigationItem = React.createClass({
  render () {
    return (
      <li>
        <a href={this.props.route.route}>{this.props.route.name}</a>
      </li>
    );
  }
});
