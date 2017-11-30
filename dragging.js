var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

 handler.setInputAction(function (movement) {
                    curEntity = null;
                    var pick = viewer.scene.pick(movement.position);
                    if (Cesium.defined(pick) && Cesium.defined(pick.node) && Cesium.defined(pick.mesh)) {
                        viewer.scene.screenSpaceCameraController.enableRotate = false;
                        var EntityId = pick["id"]._id;
                        curEntity = viewer.entities.getById(EntityId)
                        handler.setInputAction(function (movement) {
                            var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, viewer.scene.globe.ellipsoid);
                            if (cartesian && curEntity) {
                                var position = cartesian;

                                var rotatePortion = parseInt($("#rotateBar").val(), 10) / 100;
                                var curEntityPosition = curEntity.position.getValue();
                                var heading = Math.PI * 2 * rotatePortion;

                                var pitch = Cesium.Math.toRadians(0.0);
                                var roll = Cesium.Math.toRadians(0.0);
                                var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
                                var quaternion = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
                                curEntity.position = cartesian;
                                curEntity.orientation = quaternion;

                                var transform = Cesium.Transforms.headingPitchRollToFixedFrame(position, hpr);
                                curEntity.transform = Cesium.Transforms.headingPitchRollToFixedFrame(position, hpr);

                            }

                        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
                    }

                }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

                handler.setInputAction(function (movement) {
                    viewer.scene.screenSpaceCameraController.enableRotate = true;
                    handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
                    //console.log(movement.position);
                    var cartesian = viewer.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid);
                    if (cartesian){
                        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                        var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
                        var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
                         console.log(longitudeString, latitudeString)
                    }

                }, Cesium.ScreenSpaceEventType.LEFT_UP);