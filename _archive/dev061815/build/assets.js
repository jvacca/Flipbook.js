lib = {};

lib.mask = {};
lib.mask.draw = function(ctx) {
      ctx.beginPath();
      ctx.arc(20, 20, 24, 0, Math.PI * 2, false);
      ctx.closePath();
};

lib.box1 = {};
lib.box1.draw = function(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(41.1, 28.1);
      ctx.bezierCurveTo(26.3, 25.0, 17.8, 28.0, 10.8, 31.8);
      ctx.bezierCurveTo(10.4, 32.0, 10.0, 32.2, 9.7, 32.3);
      ctx.bezierCurveTo(9.8, 32.1, 9.9, 31.9, 10.0, 31.7);
      ctx.bezierCurveTo(12.7, 25.3, 15.1, 20.2, 17.8, 15.7);
      ctx.bezierCurveTo(19.4, 20.6, 23.9, 24.1, 29.3, 24.1);
      ctx.bezierCurveTo(36.0, 24.1, 41.4, 18.7, 41.4, 12.1);
      ctx.bezierCurveTo(41.4, 5.4, 36.0, 0.0, 29.3, 0.0);
      ctx.bezierCurveTo(24.5, 0.0, 20.4, 2.8, 18.4, 6.9);
      ctx.bezierCurveTo(18.4, 6.8, 18.3, 6.8, 18.3, 6.8);
      ctx.bezierCurveTo(16.2, 5.3, 13.3, 5.8, 11.9, 7.9);
      ctx.bezierCurveTo(8.0, 13.6, 5.0, 19.8, 1.5, 28.1);
      ctx.bezierCurveTo(-1.4, 34.7, 0.4, 38.3, 2.4, 40.1);
      ctx.bezierCurveTo(5.2, 42.7, 9.7, 42.7, 14.7, 40.1);
      ctx.lineTo(14.7, 71.7);
      ctx.lineTo(14.7, 72.3);
      ctx.lineTo(14.7, 124.8);
      ctx.bezierCurveTo(14.7, 127.8, 17.2, 130.3, 20.2, 130.3);
      ctx.lineTo(22.3, 130.3);
      ctx.bezierCurveTo(25.3, 130.3, 27.7, 127.8, 27.7, 124.8);
      ctx.lineTo(27.7, 76.2);
      ctx.lineTo(30.6, 76.2);
      ctx.lineTo(30.6, 124.8);
      ctx.bezierCurveTo(30.6, 127.8, 33.1, 130.3, 36.1, 130.3);
      ctx.lineTo(38.2, 130.3);
      ctx.bezierCurveTo(41.2, 130.3, 43.6, 127.8, 43.6, 124.8);
      ctx.lineTo(43.6, 72.3);
      ctx.lineTo(43.6, 71.7);
      ctx.lineTo(43.6, 39.7);
      ctx.bezierCurveTo(47.8, 44.6, 48.0, 55.8, 47.6, 71.2);
      ctx.bezierCurveTo(47.6, 72.8, 47.5, 74.5, 47.5, 76.2);
      ctx.bezierCurveTo(47.4, 78.7, 49.5, 80.8, 52.0, 80.8);
      ctx.bezierCurveTo(52.0, 80.8, 52.1, 80.8, 52.1, 80.8);
      ctx.bezierCurveTo(54.6, 80.8, 56.6, 78.8, 56.7, 76.3);
      ctx.bezierCurveTo(56.7, 74.7, 56.8, 73.0, 56.8, 71.4);
      ctx.bezierCurveTo(57.3, 51.8, 57.8, 31.5, 41.1, 28.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(116, 191, 68)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(27.2, 10.5);
      ctx.bezierCurveTo(27.2, 12.4, 25.6, 14.0, 23.7, 14.0);
      ctx.bezierCurveTo(21.8, 14.0, 20.3, 12.4, 20.3, 10.5);
      ctx.bezierCurveTo(20.3, 8.6, 21.8, 7.1, 23.7, 7.1);
      ctx.bezierCurveTo(25.6, 7.1, 27.2, 8.6, 27.2, 10.5);
      ctx.closePath();
      ctx.lineWidth = 1.1;
      ctx.strokeStyle = "rgb(255, 255, 255)";
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(37.3, 10.5);
      ctx.bezierCurveTo(37.3, 12.4, 35.7, 14.0, 33.8, 14.0);
      ctx.bezierCurveTo(31.9, 14.0, 30.4, 12.4, 30.4, 10.5);
      ctx.bezierCurveTo(30.4, 8.6, 31.9, 7.1, 33.8, 7.1);
      ctx.bezierCurveTo(35.7, 7.1, 37.3, 8.6, 37.3, 10.5);
      ctx.closePath();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(37.3, 10.9);
      ctx.lineTo(41.2, 10.9);
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(27.2, 10.9);
      ctx.lineTo(30.5, 10.9);
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(18.3, 10.9);
      ctx.lineTo(20.3, 10.9);
      ctx.stroke();
      ctx.restore();
};

lib.box2 = {};
lib.box2.draw = function(ctx) {
      var alpha = ctx.globalAlpha;
      var gradient;

      // background/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(19.6, 142.0);
      ctx.lineTo(0.0, 158.4);
      ctx.bezierCurveTo(0.0, 158.4, -0.3, 163.8, 3.2, 163.8);
      ctx.bezierCurveTo(4.3, 163.8, 57.2, 163.8, 129.5, 163.8);
      ctx.bezierCurveTo(136.1, 170.4, 146.6, 171.1, 151.1, 171.1);
      ctx.bezierCurveTo(155.4, 171.1, 151.6, 163.8, 155.9, 163.8);
      ctx.bezierCurveTo(260.6, 163.8, 399.6, 163.8, 479.9, 163.8);
      ctx.bezierCurveTo(495.7, 170.4, 499.0, 168.4, 505.3, 168.4);
      ctx.bezierCurveTo(509.9, 168.4, 504.1, 163.8, 508.1, 163.8);
      ctx.bezierCurveTo(531.2, 163.8, 544.9, 163.8, 544.9, 163.8);
      ctx.bezierCurveTo(544.9, 163.8, 551.2, 161.1, 549.0, 158.4);
      ctx.bezierCurveTo(546.9, 155.8, 529.9, 147.3, 529.9, 147.3);
      ctx.lineTo(486.7, 137.7);
      ctx.lineTo(27.4, 135.7);
      ctx.lineTo(19.6, 142.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(39, 39, 39)";
      ctx.fill();
      ctx.restore();

      // layer3/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(516.1, 107.6);
      ctx.bezierCurveTo(525.8, 107.6, 534.6, 112.8, 540.6, 119.1);
      ctx.bezierCurveTo(544.3, 120.1, 554.1, 119.6, 554.1, 119.6);
      ctx.lineTo(552.1, 101.8);
      ctx.bezierCurveTo(552.1, 101.8, 547.3, 86.1, 546.8, 84.3);
      ctx.bezierCurveTo(546.3, 82.6, 545.3, 77.8, 542.6, 77.3);
      ctx.bezierCurveTo(539.8, 76.8, 512.8, 71.1, 478.5, 70.6);
      ctx.bezierCurveTo(478.5, 58.6, 475.8, 45.6, 475.8, 45.6);
      ctx.bezierCurveTo(475.8, 45.6, 474.6, 29.8, 473.6, 25.8);
      ctx.bezierCurveTo(472.6, 21.8, 466.3, 11.1, 456.3, 9.8);
      ctx.bezierCurveTo(446.3, 8.6, 282.0, 9.8, 282.0, 9.8);
      ctx.bezierCurveTo(282.0, 9.8, 281.5, 4.0, 277.5, 4.0);
      ctx.bezierCurveTo(274.5, 4.0, 249.8, 4.0, 248.0, 4.0);
      ctx.bezierCurveTo(246.3, 4.0, 243.5, 9.5, 243.5, 9.5);
      ctx.lineTo(25.4, 8.7);
      ctx.bezierCurveTo(25.4, 8.7, 17.9, 10.6, 14.9, 24.6);
      ctx.bezierCurveTo(11.9, 38.6, 8.9, 69.8, 8.7, 90.1);
      ctx.bezierCurveTo(8.7, 107.1, 8.7, 120.1, 8.7, 120.1);
      ctx.lineTo(32.7, 120.1);
      ctx.lineTo(32.9, 134.3);
      ctx.lineTo(124.6, 133.6);
      ctx.bezierCurveTo(124.6, 133.6, 127.8, 122.2, 136.4, 115.1);
      ctx.bezierCurveTo(143.3, 109.3, 151.4, 107.1, 160.4, 107.6);
      ctx.bezierCurveTo(172.1, 108.2, 178.1, 112.3, 183.4, 117.8);
      ctx.bezierCurveTo(188.6, 123.3, 192.6, 132.3, 192.6, 132.3);
      ctx.lineTo(382.8, 133.8);
      ctx.lineTo(410.3, 151.8);
      ctx.bezierCurveTo(410.3, 151.8, 469.1, 152.1, 475.8, 151.8);
      ctx.bezierCurveTo(477.4, 151.7, 479.3, 149.8, 480.3, 147.1);
      ctx.bezierCurveTo(481.3, 144.3, 482.1, 134.8, 484.1, 130.1);
      ctx.bezierCurveTo(484.1, 130.1, 486.3, 120.3, 495.6, 113.1);
      ctx.bezierCurveTo(504.8, 105.8, 516.1, 107.6, 516.1, 107.6);
      ctx.closePath();
      ctx.fill();
      ctx.lineWidth = 8.0;
      ctx.stroke();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(514.1, 115.8);
      ctx.bezierCurveTo(499.6, 115.8, 487.8, 127.6, 487.8, 142.1);
      ctx.bezierCurveTo(487.8, 156.6, 499.6, 168.4, 514.1, 168.4);
      ctx.bezierCurveTo(528.6, 168.4, 540.4, 156.6, 540.4, 142.1);
      ctx.bezierCurveTo(540.4, 127.6, 528.6, 115.8, 514.1, 115.8);
      ctx.closePath();
      ctx.fill();
      ctx.lineWidth = 7.0;
      ctx.stroke();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(158.8, 115.8);
      ctx.bezierCurveTo(144.3, 115.8, 132.5, 127.6, 132.5, 142.1);
      ctx.bezierCurveTo(132.5, 156.6, 144.3, 168.4, 158.8, 168.4);
      ctx.bezierCurveTo(173.3, 168.4, 185.1, 156.6, 185.1, 142.1);
      ctx.bezierCurveTo(185.1, 127.6, 173.3, 115.8, 158.8, 115.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(538.6, 142.0);
      ctx.lineTo(23.9, 142.0);
      ctx.lineTo(23.9, 104.6);
      ctx.lineTo(538.6, 104.6);
      ctx.lineTo(538.6, 142.0);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(560.6, 134.9);
      ctx.bezierCurveTo(560.6, 136.1, 559.6, 137.1, 558.4, 137.1);
      ctx.lineTo(533.0, 137.1);
      ctx.bezierCurveTo(531.8, 137.1, 530.8, 136.1, 530.8, 134.9);
      ctx.lineTo(530.8, 122.7);
      ctx.bezierCurveTo(530.8, 121.5, 531.8, 120.6, 533.0, 120.6);
      ctx.lineTo(558.4, 120.6);
      ctx.bezierCurveTo(559.6, 120.6, 560.6, 121.5, 560.6, 122.7);
      ctx.lineTo(560.6, 134.9);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(32.3, 141.1);
      ctx.bezierCurveTo(32.3, 142.3, 31.3, 143.3, 30.1, 143.3);
      ctx.lineTo(2.2, 143.3);
      ctx.bezierCurveTo(1.0, 143.3, 0.0, 142.3, 0.0, 141.1);
      ctx.lineTo(0.0, 122.2);
      ctx.bezierCurveTo(0.0, 121.0, 1.0, 120.1, 2.2, 120.1);
      ctx.lineTo(30.1, 120.1);
      ctx.bezierCurveTo(31.3, 120.1, 32.3, 121.0, 32.3, 122.2);
      ctx.lineTo(32.3, 141.1);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(128.0, 155.7);
      ctx.lineTo(125.1, 155.7);
      ctx.lineTo(125.1, 135.3);
      ctx.lineTo(128.0, 135.3);
      ctx.lineTo(128.0, 155.7);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(482.5, 158.4);
      ctx.lineTo(479.6, 158.4);
      ctx.lineTo(479.6, 135.3);
      ctx.lineTo(482.5, 135.3);
      ctx.lineTo(482.5, 158.4);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(467.4, 15.7);
      ctx.lineTo(481.7, 15.7);
      ctx.lineTo(484.5, 22.1);
      ctx.lineTo(472.7, 30.5);
      ctx.lineTo(467.4, 15.7);
      ctx.closePath();
      ctx.fill();

      // layer3/Path
      ctx.beginPath();
      ctx.moveTo(23.7, 13.1);
      ctx.lineTo(10.4, 10.9);
      ctx.lineTo(6.9, 15.6);
      ctx.lineTo(16.4, 23.9);
      ctx.lineTo(23.7, 13.1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(516.1, 107.6);
      ctx.bezierCurveTo(525.8, 107.6, 534.6, 112.8, 540.6, 119.1);
      ctx.bezierCurveTo(544.3, 120.1, 554.1, 119.6, 554.1, 119.6);
      ctx.lineTo(552.1, 101.8);
      ctx.bezierCurveTo(552.1, 101.8, 547.3, 86.1, 546.8, 84.3);
      ctx.bezierCurveTo(546.3, 82.6, 545.3, 77.8, 542.6, 77.3);
      ctx.bezierCurveTo(539.8, 76.8, 512.8, 71.1, 478.5, 70.6);
      ctx.bezierCurveTo(477.7, 57.6, 475.8, 45.6, 475.8, 45.6);
      ctx.bezierCurveTo(475.8, 45.6, 474.6, 29.8, 473.6, 25.8);
      ctx.bezierCurveTo(472.6, 21.8, 466.3, 11.1, 456.3, 9.8);
      ctx.bezierCurveTo(446.3, 8.6, 282.0, 9.8, 282.0, 9.8);
      ctx.bezierCurveTo(282.0, 9.8, 281.5, 4.0, 277.5, 4.0);
      ctx.bezierCurveTo(274.5, 4.0, 249.8, 4.0, 248.0, 4.0);
      ctx.bezierCurveTo(246.3, 4.0, 243.5, 9.5, 243.5, 9.5);
      ctx.lineTo(25.4, 8.7);
      ctx.lineTo(25.4, 8.7);
      ctx.bezierCurveTo(25.4, 8.7, 17.9, 10.6, 14.9, 24.6);
      ctx.bezierCurveTo(11.9, 38.6, 8.9, 69.8, 8.7, 90.1);
      ctx.bezierCurveTo(8.7, 107.1, 8.7, 120.1, 8.7, 120.1);
      ctx.lineTo(32.7, 120.1);
      ctx.lineTo(32.9, 134.3);
      ctx.lineTo(124.6, 134.6);
      ctx.bezierCurveTo(124.6, 134.6, 127.8, 122.2, 136.4, 115.1);
      ctx.bezierCurveTo(143.3, 109.3, 151.4, 107.1, 160.4, 107.6);
      ctx.bezierCurveTo(172.1, 108.2, 178.1, 112.3, 183.4, 117.8);
      ctx.bezierCurveTo(188.6, 123.3, 192.6, 133.4, 192.6, 133.4);
      ctx.lineTo(382.8, 133.8);
      ctx.lineTo(410.3, 151.8);
      ctx.bezierCurveTo(410.3, 151.8, 469.1, 152.1, 475.8, 151.8);
      ctx.bezierCurveTo(477.4, 151.7, 479.3, 149.8, 480.3, 147.1);
      ctx.bezierCurveTo(481.3, 144.3, 482.1, 134.8, 484.1, 130.1);
      ctx.bezierCurveTo(484.1, 130.1, 486.3, 120.3, 495.6, 113.1);
      ctx.bezierCurveTo(504.8, 105.8, 516.1, 107.6, 516.1, 107.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(249, 194, 33)";
      ctx.fill();

      // layer2/Path
      ctx.beginPath();
      ctx.moveTo(514.1, 115.8);
      ctx.bezierCurveTo(499.6, 115.8, 487.8, 127.6, 487.8, 142.1);
      ctx.bezierCurveTo(487.8, 156.6, 499.6, 168.4, 514.1, 168.4);
      ctx.bezierCurveTo(528.6, 168.4, 540.4, 156.6, 540.4, 142.1);
      ctx.bezierCurveTo(540.4, 127.6, 528.6, 115.8, 514.1, 115.8);
      ctx.closePath();
      gradient = ctx.createRadialGradient(528.1, 148.7, 0.0, 514.1, 142.1, 15.5);
      gradient.addColorStop(0.08, "rgb(13, 4, 9)");
      gradient.addColorStop(0.73, "rgb(24, 17, 20)");
      gradient.addColorStop(1.00, "rgb(34, 30, 31)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Compound Path
      ctx.beginPath();

      // layer2/Compound Path/Path
      ctx.moveTo(514.1, 115.8);
      ctx.bezierCurveTo(499.6, 115.8, 487.8, 127.6, 487.8, 142.1);
      ctx.bezierCurveTo(487.8, 156.6, 499.6, 168.4, 514.1, 168.4);
      ctx.bezierCurveTo(528.6, 168.4, 540.4, 156.6, 540.4, 142.1);
      ctx.bezierCurveTo(540.4, 127.6, 528.6, 115.8, 514.1, 115.8);
      ctx.closePath();

      // layer2/Compound Path/Path
      ctx.moveTo(514.1, 156.9);
      ctx.bezierCurveTo(506.0, 156.9, 499.3, 150.2, 499.3, 142.1);
      ctx.bezierCurveTo(499.3, 133.9, 506.0, 127.3, 514.1, 127.3);
      ctx.bezierCurveTo(522.3, 127.3, 528.9, 133.9, 528.9, 142.1);
      ctx.bezierCurveTo(528.9, 150.2, 522.3, 156.9, 514.1, 156.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(105, 106, 108)";
      ctx.fill();

      // layer2/Group

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(519.0, 142.0);
      ctx.bezierCurveTo(519.0, 144.7, 516.8, 146.9, 514.1, 146.9);
      ctx.bezierCurveTo(511.3, 146.9, 509.1, 144.7, 509.1, 142.0);
      ctx.bezierCurveTo(509.1, 139.3, 511.3, 137.1, 514.1, 137.1);
      ctx.bezierCurveTo(516.8, 137.1, 519.0, 139.3, 519.0, 142.0);
      ctx.closePath();
      gradient = ctx.createRadialGradient(514.1, 142.0, 0.0, 514.1, 142.0, 4.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(513.0, 134.7);
      ctx.lineTo(512.0, 132.9);
      ctx.lineTo(513.0, 131.1);
      ctx.lineTo(515.1, 131.1);
      ctx.lineTo(516.1, 132.9);
      ctx.lineTo(515.1, 134.7);
      ctx.lineTo(513.0, 134.7);
      ctx.closePath();
      gradient = ctx.createRadialGradient(514.1, 132.9, 0.0, 514.1, 132.9, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(513.0, 153.7);
      ctx.lineTo(512.0, 151.9);
      ctx.lineTo(513.0, 150.1);
      ctx.lineTo(515.1, 150.1);
      ctx.lineTo(516.1, 151.9);
      ctx.lineTo(515.1, 153.7);
      ctx.lineTo(513.0, 153.7);
      ctx.closePath();
      gradient = ctx.createRadialGradient(514.1, 151.9, 0.0, 514.1, 151.9, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group
      ctx.restore();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(506.4, 143.5);
      ctx.lineTo(504.6, 144.5);
      ctx.lineTo(502.8, 143.5);
      ctx.lineTo(502.8, 141.4);
      ctx.lineTo(504.6, 140.3);
      ctx.lineTo(506.4, 141.4);
      ctx.lineTo(506.4, 143.5);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.000, -1.000, -1.000, -0.000, 804.3, 803.1);
      gradient = ctx.createRadialGradient(660.7, 299.7, 0.0, 660.7, 299.7, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(525.4, 143.5);
      ctx.lineTo(523.6, 144.5);
      ctx.lineTo(521.8, 143.5);
      ctx.lineTo(521.8, 141.4);
      ctx.lineTo(523.6, 140.3);
      ctx.lineTo(525.4, 141.4);
      ctx.lineTo(525.4, 143.5);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.000, -1.000, -1.000, -0.000, 804.3, 803.1);
      gradient = ctx.createRadialGradient(660.7, 280.7, 0.0, 660.7, 280.7, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group
      ctx.restore();
      ctx.restore();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(507.9, 137.7);
      ctx.lineTo(505.9, 137.2);
      ctx.lineTo(505.4, 135.2);
      ctx.lineTo(506.8, 133.7);
      ctx.lineTo(508.8, 134.2);
      ctx.lineTo(509.4, 136.2);
      ctx.lineTo(507.9, 137.7);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.707, -0.707, -0.707, -0.707, 271.6, 791.0);
      gradient = ctx.createRadialGradient(630.0, 296.6, 0.0, 630.0, 296.6, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(521.3, 151.1);
      ctx.lineTo(519.3, 150.6);
      ctx.lineTo(518.8, 148.6);
      ctx.lineTo(520.2, 147.1);
      ctx.lineTo(522.2, 147.7);
      ctx.lineTo(522.8, 149.7);
      ctx.lineTo(521.3, 151.1);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.707, -0.707, -0.707, -0.707, 271.6, 791.0);
      gradient = ctx.createRadialGradient(630.0, 277.6, 0.0, 630.0, 277.6, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group
      ctx.restore();
      ctx.restore();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(509.4, 148.6);
      ctx.lineTo(508.8, 150.6);
      ctx.lineTo(506.8, 151.1);
      ctx.lineTo(505.4, 149.7);
      ctx.lineTo(505.9, 147.7);
      ctx.lineTo(507.9, 147.1);
      ctx.lineTo(509.4, 148.6);
      ctx.closePath();
      ctx.save();
      ctx.transform(-0.707, -0.707, -0.707, 0.707, 1189.5, 435.2);
      gradient = ctx.createRadialGradient(684.6, 280.1, 0.0, 684.6, 280.1, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(522.8, 135.2);
      ctx.lineTo(522.2, 137.2);
      ctx.lineTo(520.2, 137.7);
      ctx.lineTo(518.8, 136.2);
      ctx.lineTo(519.3, 134.2);
      ctx.lineTo(521.3, 133.7);
      ctx.lineTo(522.8, 135.2);
      ctx.closePath();
      ctx.save();
      ctx.transform(-0.707, -0.707, -0.707, 0.707, 1189.5, 435.2);
      gradient = ctx.createRadialGradient(684.6, 261.1, 0.0, 684.6, 261.1, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // layer2/Group/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(527.0, 123.6);
      ctx.bezierCurveTo(535.1, 129.3, 538.8, 139.1, 538.0, 147.3);
      ctx.bezierCurveTo(539.0, 142.6, 538.7, 137.6, 536.7, 132.8);
      ctx.bezierCurveTo(531.6, 120.3, 517.3, 114.3, 504.8, 119.5);
      ctx.bezierCurveTo(503.6, 120.0, 502.4, 120.6, 501.2, 121.3);
      ctx.bezierCurveTo(508.7, 117.8, 518.9, 117.9, 527.0, 123.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(501.1, 160.4);
      ctx.bezierCurveTo(492.9, 154.7, 489.4, 145.1, 490.2, 136.8);
      ctx.bezierCurveTo(489.2, 141.5, 489.5, 146.6, 491.5, 151.4);
      ctx.bezierCurveTo(496.6, 163.9, 510.9, 169.8, 523.4, 164.7);
      ctx.bezierCurveTo(524.7, 164.2, 525.9, 163.6, 527.0, 162.9);
      ctx.bezierCurveTo(519.5, 166.4, 509.1, 166.1, 501.1, 160.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();

      // layer2/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(158.8, 115.8);
      ctx.bezierCurveTo(144.3, 115.8, 132.5, 127.6, 132.5, 142.1);
      ctx.bezierCurveTo(132.5, 156.6, 144.3, 168.4, 158.8, 168.4);
      ctx.bezierCurveTo(173.3, 168.4, 185.1, 156.6, 185.1, 142.1);
      ctx.bezierCurveTo(185.1, 127.6, 173.3, 115.8, 158.8, 115.8);
      ctx.closePath();
      gradient = ctx.createRadialGradient(172.8, 148.7, 0.0, 158.8, 142.1, 15.5);
      gradient.addColorStop(0.08, "rgb(13, 4, 9)");
      gradient.addColorStop(0.73, "rgb(24, 17, 20)");
      gradient.addColorStop(1.00, "rgb(34, 30, 31)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Compound Path
      ctx.beginPath();

      // layer2/Compound Path/Path
      ctx.moveTo(158.8, 115.8);
      ctx.bezierCurveTo(144.3, 115.8, 132.5, 127.6, 132.5, 142.1);
      ctx.bezierCurveTo(132.5, 156.6, 144.3, 168.4, 158.8, 168.4);
      ctx.bezierCurveTo(173.3, 168.4, 185.1, 156.6, 185.1, 142.1);
      ctx.bezierCurveTo(185.1, 127.6, 173.3, 115.8, 158.8, 115.8);
      ctx.closePath();

      // layer2/Compound Path/Path
      ctx.moveTo(158.8, 156.9);
      ctx.bezierCurveTo(150.6, 156.9, 144.0, 150.2, 144.0, 142.1);
      ctx.bezierCurveTo(144.0, 133.9, 150.6, 127.3, 158.8, 127.3);
      ctx.bezierCurveTo(166.9, 127.3, 173.6, 133.9, 173.6, 142.1);
      ctx.bezierCurveTo(173.6, 150.2, 166.9, 156.9, 158.8, 156.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(105, 106, 108)";
      ctx.fill();

      // layer2/Group

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(163.7, 142.0);
      ctx.bezierCurveTo(163.7, 144.7, 161.5, 146.9, 158.7, 146.9);
      ctx.bezierCurveTo(156.0, 146.9, 153.8, 144.7, 153.8, 142.0);
      ctx.bezierCurveTo(153.8, 139.3, 156.0, 137.1, 158.7, 137.1);
      ctx.bezierCurveTo(161.5, 137.1, 163.7, 139.3, 163.7, 142.0);
      ctx.closePath();
      gradient = ctx.createRadialGradient(158.7, 142.0, 0.0, 158.7, 142.0, 4.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(157.7, 134.7);
      ctx.lineTo(156.7, 132.9);
      ctx.lineTo(157.7, 131.1);
      ctx.lineTo(159.8, 131.1);
      ctx.lineTo(160.8, 132.9);
      ctx.lineTo(159.8, 134.7);
      ctx.lineTo(157.7, 134.7);
      ctx.closePath();
      gradient = ctx.createRadialGradient(158.7, 132.9, 0.0, 158.7, 132.9, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(157.7, 153.7);
      ctx.lineTo(156.7, 151.9);
      ctx.lineTo(157.7, 150.1);
      ctx.lineTo(159.8, 150.1);
      ctx.lineTo(160.8, 151.9);
      ctx.lineTo(159.8, 153.7);
      ctx.lineTo(157.7, 153.7);
      ctx.closePath();
      gradient = ctx.createRadialGradient(158.7, 151.9, 0.0, 158.7, 151.9, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group
      ctx.restore();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(151.0, 143.5);
      ctx.lineTo(149.2, 144.5);
      ctx.lineTo(147.4, 143.5);
      ctx.lineTo(147.4, 141.4);
      ctx.lineTo(149.2, 140.3);
      ctx.lineTo(151.0, 141.4);
      ctx.lineTo(151.0, 143.5);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.000, -1.000, -1.000, -0.000, 804.3, 803.1);
      gradient = ctx.createRadialGradient(660.7, 655.1, 0.0, 660.7, 655.1, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(170.0, 143.5);
      ctx.lineTo(168.2, 144.5);
      ctx.lineTo(166.4, 143.5);
      ctx.lineTo(166.4, 141.4);
      ctx.lineTo(168.2, 140.3);
      ctx.lineTo(170.0, 141.4);
      ctx.lineTo(170.0, 143.5);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.000, -1.000, -1.000, -0.000, 804.3, 803.1);
      gradient = ctx.createRadialGradient(660.7, 636.1, 0.0, 660.7, 636.1, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group
      ctx.restore();
      ctx.restore();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(152.6, 137.7);
      ctx.lineTo(150.6, 137.2);
      ctx.lineTo(150.0, 135.2);
      ctx.lineTo(151.5, 133.7);
      ctx.lineTo(153.5, 134.2);
      ctx.lineTo(154.0, 136.2);
      ctx.lineTo(152.6, 137.7);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.707, -0.707, -0.707, -0.707, 271.6, 791.0);
      gradient = ctx.createRadialGradient(378.8, 547.9, 0.0, 378.8, 547.9, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(166.0, 151.1);
      ctx.lineTo(164.0, 150.6);
      ctx.lineTo(163.4, 148.6);
      ctx.lineTo(164.9, 147.1);
      ctx.lineTo(166.9, 147.7);
      ctx.lineTo(167.4, 149.7);
      ctx.lineTo(166.0, 151.1);
      ctx.closePath();
      ctx.save();
      ctx.transform(0.707, -0.707, -0.707, -0.707, 271.6, 791.0);
      gradient = ctx.createRadialGradient(378.8, 528.9, 0.0, 378.8, 528.9, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group
      ctx.restore();
      ctx.restore();

      // layer2/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(154.0, 148.6);
      ctx.lineTo(153.5, 150.6);
      ctx.lineTo(151.5, 151.1);
      ctx.lineTo(150.0, 149.7);
      ctx.lineTo(150.6, 147.7);
      ctx.lineTo(152.6, 147.1);
      ctx.lineTo(154.0, 148.6);
      ctx.closePath();
      ctx.save();
      ctx.transform(-0.707, -0.707, -0.707, 0.707, 1189.5, 435.2);
      gradient = ctx.createRadialGradient(935.9, 531.3, 0.0, 935.9, 531.3, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(167.4, 135.2);
      ctx.lineTo(166.9, 137.2);
      ctx.lineTo(164.9, 137.7);
      ctx.lineTo(163.4, 136.2);
      ctx.lineTo(164.0, 134.2);
      ctx.lineTo(166.0, 133.7);
      ctx.lineTo(167.4, 135.2);
      ctx.closePath();
      ctx.save();
      ctx.transform(-0.707, -0.707, -0.707, 0.707, 1189.5, 435.2);
      gradient = ctx.createRadialGradient(935.9, 512.3, 0.0, 935.9, 512.3, 1.9);
      gradient.addColorStop(0.08, "rgb(142, 144, 147)");
      gradient.addColorStop(0.73, "rgb(104, 106, 108)");
      gradient.addColorStop(1.00, "rgb(65, 67, 69)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // layer2/Group/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(171.6, 123.6);
      ctx.bezierCurveTo(179.8, 129.3, 183.5, 139.1, 182.7, 147.3);
      ctx.bezierCurveTo(183.7, 142.6, 183.4, 137.6, 181.4, 132.8);
      ctx.bezierCurveTo(176.3, 120.3, 162.0, 114.3, 149.5, 119.5);
      ctx.bezierCurveTo(148.2, 120.0, 147.0, 120.6, 145.9, 121.3);
      ctx.bezierCurveTo(153.4, 117.8, 163.6, 117.9, 171.6, 123.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(145.7, 160.4);
      ctx.bezierCurveTo(137.6, 154.7, 134.1, 145.1, 134.9, 136.8);
      ctx.bezierCurveTo(133.9, 141.5, 134.2, 146.6, 136.2, 151.4);
      ctx.bezierCurveTo(141.3, 163.9, 155.6, 169.8, 168.1, 164.7);
      ctx.bezierCurveTo(169.3, 164.2, 170.5, 163.6, 171.6, 162.9);
      ctx.bezierCurveTo(164.2, 166.4, 153.8, 166.1, 145.7, 160.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();
      ctx.restore();
      ctx.restore();

      // highlights/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(479.6, 133.7);
      ctx.bezierCurveTo(479.6, 133.7, 476.8, 117.6, 484.5, 106.4);
      ctx.bezierCurveTo(491.1, 96.8, 499.8, 93.6, 515.1, 91.9);
      ctx.bezierCurveTo(530.4, 90.2, 550.9, 97.9, 550.9, 97.9);
      ctx.lineTo(552.1, 101.8);
      ctx.lineTo(554.1, 120.6);
      ctx.lineTo(540.4, 120.6);
      ctx.bezierCurveTo(540.4, 120.6, 531.9, 107.2, 512.9, 107.2);
      ctx.bezierCurveTo(489.2, 107.2, 482.5, 133.8, 482.5, 135.3);
      ctx.bezierCurveTo(482.5, 136.7, 480.7, 145.7, 480.7, 145.7);
      ctx.lineTo(479.6, 133.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(507.3, 99.7, 517.8, 126.8);
      gradient.addColorStop(0.00, "rgb(255, 255, 255)");
      gradient.addColorStop(0.47, "rgb(255, 255, 255)");
      gradient.addColorStop(1.00, "rgb(255, 255, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // highlights/Path
      ctx.beginPath();
      ctx.moveTo(479.6, 133.7);
      ctx.bezierCurveTo(479.6, 133.7, 476.8, 117.6, 484.5, 106.4);
      ctx.bezierCurveTo(491.1, 96.8, 499.8, 93.6, 515.1, 91.9);
      ctx.bezierCurveTo(530.4, 90.2, 550.9, 97.9, 550.9, 97.9);
      ctx.lineTo(552.1, 101.8);
      ctx.lineTo(554.1, 120.6);
      ctx.lineTo(540.4, 120.6);
      ctx.bezierCurveTo(540.4, 120.6, 531.9, 107.2, 512.9, 107.2);
      ctx.bezierCurveTo(489.2, 107.2, 482.5, 133.8, 482.5, 135.3);
      ctx.bezierCurveTo(482.5, 136.7, 480.7, 145.7, 480.7, 145.7);
      ctx.lineTo(479.6, 133.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(507.3, 99.7, 517.8, 126.8);
      gradient.addColorStop(0.00, "rgb(255, 255, 255)");
      gradient.addColorStop(0.47, "rgb(255, 255, 255)");
      gradient.addColorStop(1.00, "rgb(255, 255, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // highlights/Path
      ctx.globalAlpha = alpha * 0.90;
      ctx.beginPath();
      ctx.moveTo(543.9, 78.0);
      ctx.lineTo(516.6, 73.3);
      ctx.lineTo(487.8, 70.9);
      ctx.bezierCurveTo(475.8, 73.0, 475.9, 73.2, 482.5, 73.4);
      ctx.bezierCurveTo(490.6, 73.6, 518.6, 75.5, 527.6, 78.0);
      ctx.bezierCurveTo(536.6, 80.4, 542.5, 79.6, 544.5, 85.3);
      ctx.bezierCurveTo(546.5, 91.0, 546.9, 93.9, 546.9, 93.9);
      ctx.lineTo(549.8, 94.3);
      ctx.lineTo(545.7, 80.7);
      ctx.lineTo(543.9, 78.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(531.7, 58.9, 512.9, 85.1);
      gradient.addColorStop(0.00, "rgb(255, 255, 255)");
      gradient.addColorStop(0.47, "rgb(255, 255, 255)");
      gradient.addColorStop(1.00, "rgb(255, 255, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // highlights/Path
      ctx.globalAlpha = alpha * 0.50;
      ctx.beginPath();
      ctx.moveTo(466.3, 14.7);
      ctx.bezierCurveTo(466.3, 14.7, 461.8, 10.3, 457.1, 9.9);
      ctx.bezierCurveTo(452.4, 9.6, 440.6, 9.3, 440.6, 9.3);
      ctx.lineTo(282.0, 9.8);
      ctx.lineTo(242.6, 9.5);
      ctx.lineTo(25.4, 8.7);
      ctx.bezierCurveTo(25.4, 8.7, 20.3, 10.0, 18.0, 15.6);
      ctx.bezierCurveTo(15.8, 21.1, 15.6, 21.9, 15.6, 21.9);
      ctx.bezierCurveTo(15.6, 21.9, 21.1, 13.7, 25.1, 12.3);
      ctx.bezierCurveTo(29.1, 11.0, 31.1, 11.0, 34.9, 11.0);
      ctx.bezierCurveTo(36.9, 11.0, 176.0, 10.8, 271.6, 11.3);
      ctx.bezierCurveTo(359.9, 11.8, 446.1, 11.6, 449.6, 11.6);
      ctx.bezierCurveTo(456.8, 11.6, 467.8, 16.8, 469.1, 20.4);
      ctx.bezierCurveTo(467.9, 17.1, 466.3, 14.7, 466.3, 14.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // highlights/Path
      ctx.globalAlpha = alpha * 0.30;
      ctx.beginPath();
      ctx.moveTo(421.1, 103.3);
      ctx.lineTo(14.2, 103.3);
      ctx.lineTo(14.2, 102.2);
      ctx.lineTo(421.1, 102.2);
      ctx.lineTo(421.1, 103.3);
      ctx.closePath();
      ctx.fill();

      // highlights/Path
      ctx.beginPath();
      ctx.moveTo(421.1, 106.2);
      ctx.lineTo(14.2, 106.2);
      ctx.lineTo(14.2, 105.1);
      ctx.lineTo(421.1, 105.1);
      ctx.lineTo(421.1, 106.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // details/Group
      ctx.save();

      // details/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(550.8, 104.1);
      ctx.bezierCurveTo(550.8, 104.1, 544.3, 104.3, 542.6, 105.1);
      ctx.bezierCurveTo(540.8, 105.8, 540.3, 108.3, 540.3, 109.6);
      ctx.bezierCurveTo(540.3, 111.3, 540.3, 113.6, 542.7, 114.8);
      ctx.bezierCurveTo(544.2, 115.6, 552.3, 118.1, 552.3, 118.1);
      ctx.lineTo(550.8, 104.1);
      ctx.closePath();
      gradient = ctx.createRadialGradient(549.3, 107.1, 0.0, 549.3, 107.1, 11.6);
      gradient.addColorStop(0.07, "rgb(250, 170, 23)");
      gradient.addColorStop(0.73, "rgb(239, 122, 30)");
      gradient.addColorStop(1.00, "rgb(228, 73, 36)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgb(34, 30, 31)";
      ctx.lineJoin = "round";
      ctx.stroke();

      // details/Group/Path
      ctx.beginPath();
      ctx.moveTo(472.3, 28.8);
      ctx.lineTo(473.6, 34.1);
      ctx.bezierCurveTo(473.6, 34.1, 469.1, 33.6, 469.1, 31.4);
      ctx.bezierCurveTo(469.1, 29.3, 472.3, 28.8, 472.3, 28.8);
      ctx.closePath();
      gradient = ctx.createRadialGradient(473.3, 30.9, 0.0, 473.3, 30.9, 3.4);
      gradient.addColorStop(0.07, "rgb(250, 170, 23)");
      gradient.addColorStop(0.73, "rgb(239, 122, 30)");
      gradient.addColorStop(1.00, "rgb(228, 73, 36)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Group/Path
      ctx.beginPath();
      ctx.moveTo(30.2, 19.2);
      ctx.bezierCurveTo(30.2, 20.8, 28.9, 22.1, 27.3, 22.1);
      ctx.bezierCurveTo(25.7, 22.1, 24.4, 20.8, 24.4, 19.2);
      ctx.bezierCurveTo(24.4, 17.6, 25.7, 16.3, 27.3, 16.3);
      ctx.bezierCurveTo(28.9, 16.3, 30.2, 17.6, 30.2, 19.2);
      ctx.closePath();
      gradient = ctx.createRadialGradient(27.3, 19.2, 0.0, 27.3, 19.2, 2.9);
      gradient.addColorStop(0.07, "rgb(250, 170, 23)");
      gradient.addColorStop(0.73, "rgb(239, 122, 30)");
      gradient.addColorStop(1.00, "rgb(228, 73, 36)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // details/Group/Path
      ctx.beginPath();
      ctx.moveTo(50.1, 124.1);
      ctx.bezierCurveTo(50.1, 125.8, 48.7, 127.3, 46.9, 127.3);
      ctx.bezierCurveTo(45.2, 127.3, 43.7, 125.8, 43.7, 124.1);
      ctx.bezierCurveTo(43.7, 122.3, 45.2, 120.9, 46.9, 120.9);
      ctx.bezierCurveTo(48.7, 120.9, 50.1, 122.3, 50.1, 124.1);
      ctx.closePath();
      gradient = ctx.createRadialGradient(46.9, 124.1, 0.0, 46.9, 124.1, 3.2);
      gradient.addColorStop(0.07, "rgb(250, 170, 23)");
      gradient.addColorStop(0.73, "rgb(239, 122, 30)");
      gradient.addColorStop(1.00, "rgb(228, 73, 36)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Group/Path
      ctx.beginPath();
      ctx.moveTo(264.0, 19.2);
      ctx.bezierCurveTo(264.0, 20.8, 262.7, 22.1, 261.1, 22.1);
      ctx.bezierCurveTo(259.5, 22.1, 258.2, 20.8, 258.2, 19.2);
      ctx.bezierCurveTo(258.2, 17.6, 259.5, 16.3, 261.1, 16.3);
      ctx.bezierCurveTo(262.7, 16.3, 264.0, 17.6, 264.0, 19.2);
      ctx.closePath();
      gradient = ctx.createRadialGradient(261.1, 19.2, 0.0, 261.1, 19.2, 2.9);
      gradient.addColorStop(0.07, "rgb(250, 170, 23)");
      gradient.addColorStop(0.73, "rgb(239, 122, 30)");
      gradient.addColorStop(1.00, "rgb(228, 73, 36)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Group/Path
      ctx.beginPath();
      ctx.moveTo(264.3, 124.1);
      ctx.bezierCurveTo(264.3, 125.8, 262.9, 127.3, 261.1, 127.3);
      ctx.bezierCurveTo(259.3, 127.3, 257.9, 125.8, 257.9, 124.1);
      ctx.bezierCurveTo(257.9, 122.3, 259.3, 120.9, 261.1, 120.9);
      ctx.bezierCurveTo(262.9, 120.9, 264.3, 122.3, 264.3, 124.1);
      ctx.closePath();
      gradient = ctx.createRadialGradient(261.1, 124.1, 0.0, 261.1, 124.1, 3.2);
      gradient.addColorStop(0.07, "rgb(250, 170, 23)");
      gradient.addColorStop(0.73, "rgb(239, 122, 30)");
      gradient.addColorStop(1.00, "rgb(228, 73, 36)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(243.5, 9.5);
      ctx.bezierCurveTo(243.5, 9.5, 246.3, 4.0, 248.0, 4.0);
      ctx.bezierCurveTo(249.8, 4.0, 274.5, 4.0, 277.5, 4.0);
      ctx.bezierCurveTo(281.5, 4.0, 282.0, 9.8, 282.0, 9.8);
      ctx.lineTo(243.5, 9.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // details/Group

      // details/Group/Group
      ctx.save();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(418.3, 69.0);
      ctx.lineTo(384.4, 69.0);
      ctx.lineTo(384.4, 40.2);
      ctx.lineTo(418.3, 40.2);
      ctx.lineTo(418.3, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(401.3, 42.2, 401.3, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(418.3, 55.4);
      ctx.lineTo(384.4, 55.4);
      ctx.lineTo(384.4, 53.2);
      ctx.lineTo(418.3, 53.2);
      ctx.lineTo(418.3, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(418.3, 54.3);
      ctx.lineTo(384.4, 54.3);
      ctx.lineTo(384.4, 53.2);
      ctx.lineTo(418.3, 53.2);
      ctx.lineTo(418.3, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(418.3, 69.7);
      ctx.lineTo(384.4, 69.7);
      ctx.lineTo(384.4, 68.4);
      ctx.lineTo(418.3, 68.4);
      ctx.lineTo(418.3, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(418.3, 41.2);
      ctx.lineTo(384.4, 41.2);
      ctx.lineTo(384.4, 39.9);
      ctx.lineTo(418.3, 39.9);
      ctx.lineTo(418.3, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(378.3, 69.0);
      ctx.lineTo(344.4, 69.0);
      ctx.lineTo(344.4, 40.2);
      ctx.lineTo(378.3, 40.2);
      ctx.lineTo(378.3, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(361.3, 42.2, 361.3, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(378.3, 55.4);
      ctx.lineTo(344.4, 55.4);
      ctx.lineTo(344.4, 53.2);
      ctx.lineTo(378.3, 53.2);
      ctx.lineTo(378.3, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(378.3, 54.3);
      ctx.lineTo(344.4, 54.3);
      ctx.lineTo(344.4, 53.2);
      ctx.lineTo(378.3, 53.2);
      ctx.lineTo(378.3, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(378.3, 69.7);
      ctx.lineTo(344.4, 69.7);
      ctx.lineTo(344.4, 68.4);
      ctx.lineTo(378.3, 68.4);
      ctx.lineTo(378.3, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(378.3, 41.2);
      ctx.lineTo(344.4, 41.2);
      ctx.lineTo(344.4, 39.9);
      ctx.lineTo(378.3, 39.9);
      ctx.lineTo(378.3, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(339.4, 69.0);
      ctx.lineTo(305.6, 69.0);
      ctx.lineTo(305.6, 40.2);
      ctx.lineTo(339.4, 40.2);
      ctx.lineTo(339.4, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(322.5, 42.2, 322.5, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(339.4, 55.4);
      ctx.lineTo(305.6, 55.4);
      ctx.lineTo(305.6, 53.2);
      ctx.lineTo(339.4, 53.2);
      ctx.lineTo(339.4, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(339.4, 54.3);
      ctx.lineTo(305.6, 54.3);
      ctx.lineTo(305.6, 53.2);
      ctx.lineTo(339.4, 53.2);
      ctx.lineTo(339.4, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(339.4, 69.7);
      ctx.lineTo(305.6, 69.7);
      ctx.lineTo(305.6, 68.4);
      ctx.lineTo(339.4, 68.4);
      ctx.lineTo(339.4, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(339.4, 41.2);
      ctx.lineTo(305.6, 41.2);
      ctx.lineTo(305.6, 39.9);
      ctx.lineTo(339.4, 39.9);
      ctx.lineTo(339.4, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(299.3, 69.0);
      ctx.lineTo(265.4, 69.0);
      ctx.lineTo(265.4, 40.2);
      ctx.lineTo(299.3, 40.2);
      ctx.lineTo(299.3, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(282.3, 42.2, 282.3, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(299.3, 55.4);
      ctx.lineTo(265.4, 55.4);
      ctx.lineTo(265.4, 53.2);
      ctx.lineTo(299.3, 53.2);
      ctx.lineTo(299.3, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(299.3, 54.3);
      ctx.lineTo(265.4, 54.3);
      ctx.lineTo(265.4, 53.2);
      ctx.lineTo(299.3, 53.2);
      ctx.lineTo(299.3, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(299.3, 69.7);
      ctx.lineTo(265.4, 69.7);
      ctx.lineTo(265.4, 68.4);
      ctx.lineTo(299.3, 68.4);
      ctx.lineTo(299.3, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(299.3, 41.2);
      ctx.lineTo(265.4, 41.2);
      ctx.lineTo(265.4, 39.9);
      ctx.lineTo(299.3, 39.9);
      ctx.lineTo(299.3, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(258.6, 69.0);
      ctx.lineTo(224.8, 69.0);
      ctx.lineTo(224.8, 40.2);
      ctx.lineTo(258.6, 40.2);
      ctx.lineTo(258.6, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(241.7, 42.2, 241.7, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(258.6, 55.4);
      ctx.lineTo(224.8, 55.4);
      ctx.lineTo(224.8, 53.2);
      ctx.lineTo(258.6, 53.2);
      ctx.lineTo(258.6, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(258.6, 54.3);
      ctx.lineTo(224.8, 54.3);
      ctx.lineTo(224.8, 53.2);
      ctx.lineTo(258.6, 53.2);
      ctx.lineTo(258.6, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(258.6, 69.7);
      ctx.lineTo(224.8, 69.7);
      ctx.lineTo(224.8, 68.4);
      ctx.lineTo(258.6, 68.4);
      ctx.lineTo(258.6, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(258.6, 41.2);
      ctx.lineTo(224.8, 41.2);
      ctx.lineTo(224.8, 39.9);
      ctx.lineTo(258.6, 39.9);
      ctx.lineTo(258.6, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(218.6, 69.0);
      ctx.lineTo(184.8, 69.0);
      ctx.lineTo(184.8, 40.2);
      ctx.lineTo(218.6, 40.2);
      ctx.lineTo(218.6, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(201.7, 42.2, 201.7, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(218.6, 55.4);
      ctx.lineTo(184.8, 55.4);
      ctx.lineTo(184.8, 53.2);
      ctx.lineTo(218.6, 53.2);
      ctx.lineTo(218.6, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(218.6, 54.3);
      ctx.lineTo(184.8, 54.3);
      ctx.lineTo(184.8, 53.2);
      ctx.lineTo(218.6, 53.2);
      ctx.lineTo(218.6, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(218.6, 69.7);
      ctx.lineTo(184.8, 69.7);
      ctx.lineTo(184.8, 68.4);
      ctx.lineTo(218.6, 68.4);
      ctx.lineTo(218.6, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(218.6, 41.2);
      ctx.lineTo(184.8, 41.2);
      ctx.lineTo(184.8, 39.9);
      ctx.lineTo(218.6, 39.9);
      ctx.lineTo(218.6, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(178.1, 69.0);
      ctx.lineTo(144.3, 69.0);
      ctx.lineTo(144.3, 40.2);
      ctx.lineTo(178.1, 40.2);
      ctx.lineTo(178.1, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(161.2, 42.2, 161.2, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(178.1, 55.4);
      ctx.lineTo(144.3, 55.4);
      ctx.lineTo(144.3, 53.2);
      ctx.lineTo(178.1, 53.2);
      ctx.lineTo(178.1, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(178.1, 54.3);
      ctx.lineTo(144.3, 54.3);
      ctx.lineTo(144.3, 53.2);
      ctx.lineTo(178.1, 53.2);
      ctx.lineTo(178.1, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(178.1, 69.7);
      ctx.lineTo(144.3, 69.7);
      ctx.lineTo(144.3, 68.4);
      ctx.lineTo(178.1, 68.4);
      ctx.lineTo(178.1, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(178.1, 41.2);
      ctx.lineTo(144.3, 41.2);
      ctx.lineTo(144.3, 39.9);
      ctx.lineTo(178.1, 39.9);
      ctx.lineTo(178.1, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(137.9, 69.0);
      ctx.lineTo(104.1, 69.0);
      ctx.lineTo(104.1, 40.2);
      ctx.lineTo(137.9, 40.2);
      ctx.lineTo(137.9, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(121.0, 42.2, 121.0, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(137.9, 55.4);
      ctx.lineTo(104.1, 55.4);
      ctx.lineTo(104.1, 53.2);
      ctx.lineTo(137.9, 53.2);
      ctx.lineTo(137.9, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(137.9, 54.3);
      ctx.lineTo(104.1, 54.3);
      ctx.lineTo(104.1, 53.2);
      ctx.lineTo(137.9, 53.2);
      ctx.lineTo(137.9, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(137.9, 69.7);
      ctx.lineTo(104.1, 69.7);
      ctx.lineTo(104.1, 68.4);
      ctx.lineTo(137.9, 68.4);
      ctx.lineTo(137.9, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(137.9, 41.2);
      ctx.lineTo(104.1, 41.2);
      ctx.lineTo(104.1, 39.9);
      ctx.lineTo(137.9, 39.9);
      ctx.lineTo(137.9, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(97.4, 69.0);
      ctx.lineTo(63.6, 69.0);
      ctx.lineTo(63.6, 40.2);
      ctx.lineTo(97.4, 40.2);
      ctx.lineTo(97.4, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(80.5, 42.2, 80.5, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(97.4, 55.4);
      ctx.lineTo(63.6, 55.4);
      ctx.lineTo(63.6, 53.2);
      ctx.lineTo(97.4, 53.2);
      ctx.lineTo(97.4, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(97.4, 54.3);
      ctx.lineTo(63.6, 54.3);
      ctx.lineTo(63.6, 53.2);
      ctx.lineTo(97.4, 53.2);
      ctx.lineTo(97.4, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(97.4, 69.7);
      ctx.lineTo(63.6, 69.7);
      ctx.lineTo(63.6, 68.4);
      ctx.lineTo(97.4, 68.4);
      ctx.lineTo(97.4, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(97.4, 41.2);
      ctx.lineTo(63.6, 41.2);
      ctx.lineTo(63.6, 39.9);
      ctx.lineTo(97.4, 39.9);
      ctx.lineTo(97.4, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Group/Group
      ctx.restore();

      // details/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(57.0, 69.0);
      ctx.lineTo(23.2, 69.0);
      ctx.lineTo(23.2, 40.2);
      ctx.lineTo(57.0, 40.2);
      ctx.lineTo(57.0, 69.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(40.1, 42.2, 40.1, 68.5);
      gradient.addColorStop(0.00, "rgb(37, 38, 39)");
      gradient.addColorStop(0.47, "rgb(52, 52, 54)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(57.0, 55.4);
      ctx.lineTo(23.2, 55.4);
      ctx.lineTo(23.2, 53.2);
      ctx.lineTo(57.0, 53.2);
      ctx.lineTo(57.0, 55.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 115, 118)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(57.0, 54.3);
      ctx.lineTo(23.2, 54.3);
      ctx.lineTo(23.2, 53.2);
      ctx.lineTo(57.0, 53.2);
      ctx.lineTo(57.0, 54.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(87, 88, 90)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(57.0, 69.7);
      ctx.lineTo(23.2, 69.7);
      ctx.lineTo(23.2, 68.4);
      ctx.lineTo(57.0, 68.4);
      ctx.lineTo(57.0, 69.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(140, 143, 145)";
      ctx.fill();

      // details/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(57.0, 41.2);
      ctx.lineTo(23.2, 41.2);
      ctx.lineTo(23.2, 39.9);
      ctx.lineTo(57.0, 39.9);
      ctx.lineTo(57.0, 41.2);
      ctx.closePath();
      ctx.fill();

      // details/Path
      ctx.restore();
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(446.7, 90.6);
      ctx.bezierCurveTo(446.7, 91.4, 446.0, 92.0, 445.2, 92.0);
      ctx.lineTo(429.0, 92.0);
      ctx.bezierCurveTo(428.3, 92.0, 427.6, 91.4, 427.6, 90.6);
      ctx.lineTo(427.6, 44.9);
      ctx.bezierCurveTo(427.6, 44.1, 428.3, 43.4, 429.0, 43.4);
      ctx.lineTo(445.2, 43.4);
      ctx.bezierCurveTo(446.0, 43.4, 446.7, 44.1, 446.7, 44.9);
      ctx.lineTo(446.7, 90.6);
      ctx.closePath();
      gradient = ctx.createLinearGradient(437.1, 46.9, 437.1, 91.2);
      gradient.addColorStop(0.00, "rgb(57, 56, 56)");
      gradient.addColorStop(0.47, "rgb(62, 61, 62)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(446.7, 143.1);
      ctx.bezierCurveTo(446.7, 143.8, 446.0, 144.5, 445.2, 144.5);
      ctx.lineTo(429.0, 144.5);
      ctx.bezierCurveTo(428.3, 144.5, 427.6, 143.8, 427.6, 143.1);
      ctx.lineTo(427.6, 97.4);
      ctx.bezierCurveTo(427.6, 96.6, 428.3, 95.9, 429.0, 95.9);
      ctx.lineTo(445.2, 95.9);
      ctx.bezierCurveTo(446.0, 95.9, 446.7, 96.6, 446.7, 97.4);
      ctx.lineTo(446.7, 143.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(437.1, 99.4, 437.1, 143.7);
      gradient.addColorStop(0.00, "rgb(57, 56, 56)");
      gradient.addColorStop(0.47, "rgb(62, 61, 62)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(471.3, 143.1);
      ctx.bezierCurveTo(471.3, 143.8, 470.7, 144.5, 469.9, 144.5);
      ctx.lineTo(453.7, 144.5);
      ctx.bezierCurveTo(452.9, 144.5, 452.3, 143.8, 452.3, 143.1);
      ctx.lineTo(452.3, 97.4);
      ctx.bezierCurveTo(452.3, 96.6, 452.9, 95.9, 453.7, 95.9);
      ctx.lineTo(469.9, 95.9);
      ctx.bezierCurveTo(470.7, 95.9, 471.3, 96.6, 471.3, 97.4);
      ctx.lineTo(471.3, 143.1);
      ctx.closePath();
      gradient = ctx.createLinearGradient(461.8, 99.4, 461.8, 143.7);
      gradient.addColorStop(0.00, "rgb(57, 56, 56)");
      gradient.addColorStop(0.47, "rgb(62, 61, 62)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(471.3, 90.6);
      ctx.bezierCurveTo(471.3, 91.4, 470.7, 92.0, 469.9, 92.0);
      ctx.lineTo(453.7, 92.0);
      ctx.bezierCurveTo(452.9, 92.0, 452.3, 91.4, 452.3, 90.6);
      ctx.lineTo(452.3, 44.9);
      ctx.bezierCurveTo(452.3, 44.1, 452.9, 43.4, 453.7, 43.4);
      ctx.lineTo(467.3, 43.4);
      ctx.bezierCurveTo(468.1, 43.4, 468.7, 44.1, 468.7, 44.9);
      ctx.lineTo(471.3, 66.8);
      ctx.lineTo(471.3, 90.6);
      ctx.closePath();
      gradient = ctx.createLinearGradient(461.8, 46.9, 461.8, 91.2);
      gradient.addColorStop(0.00, "rgb(57, 56, 56)");
      gradient.addColorStop(0.47, "rgb(62, 61, 62)");
      gradient.addColorStop(1.00, "rgb(66, 66, 68)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.stroke();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(475.5, 148.1);
      ctx.bezierCurveTo(475.5, 148.7, 475.0, 149.2, 474.4, 149.2);
      ctx.lineTo(424.8, 149.2);
      ctx.bezierCurveTo(424.2, 149.2, 423.8, 148.7, 423.8, 148.1);
      ctx.lineTo(423.8, 41.0);
      ctx.bezierCurveTo(423.8, 40.4, 424.2, 39.9, 424.8, 39.9);
      ctx.lineTo(470.5, 39.9);
      ctx.bezierCurveTo(471.1, 39.9, 471.6, 40.4, 471.6, 41.0);
      ctx.lineTo(475.5, 70.9);
      ctx.lineTo(475.5, 148.1);
      ctx.closePath();
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(416.7, 131.0);
      ctx.bezierCurveTo(416.7, 131.6, 416.2, 132.1, 415.6, 132.1);
      ctx.lineTo(404.8, 132.1);
      ctx.bezierCurveTo(404.2, 132.1, 403.7, 131.6, 403.7, 131.0);
      ctx.lineTo(403.7, 119.8);
      ctx.bezierCurveTo(403.7, 119.2, 404.2, 118.7, 404.8, 118.7);
      ctx.lineTo(415.6, 118.7);
      ctx.bezierCurveTo(416.2, 118.7, 416.7, 119.2, 416.7, 119.8);
      ctx.lineTo(416.7, 131.0);
      ctx.closePath();
      ctx.stroke();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(128.0, 114.5);
      ctx.lineTo(14.2, 114.5);
      ctx.lineTo(14.2, 108.2);
      ctx.lineTo(128.0, 108.2);
      ctx.lineTo(128.0, 114.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(421.1, 114.5);
      ctx.lineTo(186.8, 114.5);
      ctx.lineTo(186.8, 108.2);
      ctx.lineTo(421.1, 108.2);
      ctx.lineTo(421.1, 114.5);
      ctx.closePath();
      ctx.fill();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(421.1, 100.2);
      ctx.lineTo(14.2, 100.2);
      ctx.lineTo(14.2, 93.9);
      ctx.lineTo(421.1, 93.9);
      ctx.lineTo(421.1, 100.2);
      ctx.closePath();
      ctx.fill();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(421.1, 79.6);
      ctx.lineTo(14.2, 79.6);
      ctx.lineTo(14.2, 73.3);
      ctx.lineTo(421.1, 73.3);
      ctx.lineTo(421.1, 79.6);
      ctx.closePath();
      ctx.fill();

      // details/Path
      ctx.beginPath();
      ctx.moveTo(421.1, 35.4);
      ctx.lineTo(23.2, 35.4);
      ctx.lineTo(23.2, 30.9);
      ctx.lineTo(373.6, 30.9);
      ctx.lineTo(421.1, 35.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
};