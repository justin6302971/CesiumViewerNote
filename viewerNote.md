# Cesium Viewer Note
	//viewer initialize
    var viewer = new Cesium.Viewer('cesiumContainer', {
        infoBox: true,
        selectionIndicator: true,
        vrButton: false,
        scene3DOnly: false,
        projectionPicker: false,
        timeline: false,
        animation: false
    });
***
## freeze viewer to avoid default user event
	// disable the default event handlers
	viewer.scene.screenSpaceCameraController.enableTranslate = false; //only applies in 2D and Columbus view modes.
	viewer.scene.screenSpaceCameraController.enableRotate = false;
	viewer.scene.screenSpaceCameraController.enableZoom = false;
	viewer.scene.screenSpaceCameraController.enableTilt = false;
	viewer.scene.screenSpaceCameraController.enableLook = false;

## set cesium viewer port
	var center = Cesium.Cartesian3.fromDegrees(120.647864, 24.179162);
    viewer.camera.lookAt(center, new Cesium.Cartesian3(0.0, 0.0, 4200.0));