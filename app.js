var Demo = angular.module( "Demo", [] );
Demo.config(
	function( $routeProvider ){
		$routeProvider
			.when(
				"/home",
				{
					action: "splash.home"
				}
			)
			.otherwise(
				{
					redirectTo: "/home"
				}
			)
		;

	}
);
