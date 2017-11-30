# Cesium Viewer Note

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
	// disable the default event handlers
	viewer.scene.screenSpaceCameraController.enableTranslate = false; //only applies in 2D and Columbus view modes.
	viewer.scene.screenSpaceCameraController.enableRotate = false;
	viewer.scene.screenSpaceCameraController.enableZoom = false;
	viewer.scene.screenSpaceCameraController.enableTilt = false;
	viewer.scene.screenSpaceCameraController.enableLook = false;