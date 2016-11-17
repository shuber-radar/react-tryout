var MainNavigation = React.createClass({
  getInitialState: function() {
    return { routes: this.props.initialRoutes };
  },
  render: function() {
    console.log(this.state.routes)
    let navigationItems = this.state.routes.map(function(route) {
      return <NavigationItem key={route.name} route={route} />;
    });

    return (
      <div className="main-navigation">
        <h1>POC react + rails</h1>
        <ul>
          {navigationItems}
        </ul>
      </div>
    );
  }
});
