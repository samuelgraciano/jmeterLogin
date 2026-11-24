/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 483.0, "minX": 0.0, "maxY": 2813.0, "series": [{"data": [[0.0, 483.0], [0.1, 483.0], [0.2, 483.0], [0.3, 483.0], [0.4, 483.0], [0.5, 490.0], [0.6, 490.0], [0.7, 490.0], [0.8, 490.0], [0.9, 490.0], [1.0, 497.0], [1.1, 497.0], [1.2, 497.0], [1.3, 497.0], [1.4, 497.0], [1.5, 499.0], [1.6, 499.0], [1.7, 499.0], [1.8, 499.0], [1.9, 499.0], [2.0, 507.0], [2.1, 507.0], [2.2, 507.0], [2.3, 507.0], [2.4, 507.0], [2.5, 513.0], [2.6, 513.0], [2.7, 513.0], [2.8, 513.0], [2.9, 513.0], [3.0, 519.0], [3.1, 519.0], [3.2, 519.0], [3.3, 519.0], [3.4, 519.0], [3.5, 525.0], [3.6, 525.0], [3.7, 525.0], [3.8, 525.0], [3.9, 525.0], [4.0, 526.0], [4.1, 526.0], [4.2, 526.0], [4.3, 526.0], [4.4, 526.0], [4.5, 527.0], [4.6, 527.0], [4.7, 527.0], [4.8, 527.0], [4.9, 527.0], [5.0, 528.0], [5.1, 528.0], [5.2, 528.0], [5.3, 528.0], [5.4, 528.0], [5.5, 531.0], [5.6, 531.0], [5.7, 531.0], [5.8, 531.0], [5.9, 531.0], [6.0, 532.0], [6.1, 532.0], [6.2, 532.0], [6.3, 532.0], [6.4, 532.0], [6.5, 534.0], [6.6, 534.0], [6.7, 534.0], [6.8, 534.0], [6.9, 534.0], [7.0, 536.0], [7.1, 536.0], [7.2, 536.0], [7.3, 536.0], [7.4, 536.0], [7.5, 537.0], [7.6, 537.0], [7.7, 537.0], [7.8, 537.0], [7.9, 537.0], [8.0, 539.0], [8.1, 539.0], [8.2, 539.0], [8.3, 539.0], [8.4, 539.0], [8.5, 542.0], [8.6, 542.0], [8.7, 542.0], [8.8, 542.0], [8.9, 542.0], [9.0, 542.0], [9.1, 542.0], [9.2, 542.0], [9.3, 542.0], [9.4, 542.0], [9.5, 545.0], [9.6, 545.0], [9.7, 545.0], [9.8, 545.0], [9.9, 545.0], [10.0, 549.0], [10.1, 549.0], [10.2, 549.0], [10.3, 549.0], [10.4, 549.0], [10.5, 549.0], [10.6, 549.0], [10.7, 549.0], [10.8, 549.0], [10.9, 549.0], [11.0, 553.0], [11.1, 553.0], [11.2, 553.0], [11.3, 553.0], [11.4, 553.0], [11.5, 554.0], [11.6, 554.0], [11.7, 554.0], [11.8, 554.0], [11.9, 554.0], [12.0, 555.0], [12.1, 555.0], [12.2, 555.0], [12.3, 555.0], [12.4, 555.0], [12.5, 557.0], [12.6, 557.0], [12.7, 557.0], [12.8, 557.0], [12.9, 557.0], [13.0, 558.0], [13.1, 558.0], [13.2, 558.0], [13.3, 558.0], [13.4, 558.0], [13.5, 560.0], [13.6, 560.0], [13.7, 560.0], [13.8, 560.0], [13.9, 560.0], [14.0, 560.0], [14.1, 560.0], [14.2, 560.0], [14.3, 560.0], [14.4, 560.0], [14.5, 561.0], [14.6, 561.0], [14.7, 561.0], [14.8, 561.0], [14.9, 561.0], [15.0, 561.0], [15.1, 561.0], [15.2, 561.0], [15.3, 561.0], [15.4, 561.0], [15.5, 561.0], [15.6, 561.0], [15.7, 561.0], [15.8, 561.0], [15.9, 561.0], [16.0, 562.0], [16.1, 562.0], [16.2, 562.0], [16.3, 562.0], [16.4, 562.0], [16.5, 563.0], [16.6, 563.0], [16.7, 563.0], [16.8, 563.0], [16.9, 563.0], [17.0, 563.0], [17.1, 563.0], [17.2, 563.0], [17.3, 563.0], [17.4, 563.0], [17.5, 564.0], [17.6, 564.0], [17.7, 564.0], [17.8, 564.0], [17.9, 564.0], [18.0, 564.0], [18.1, 564.0], [18.2, 564.0], [18.3, 564.0], [18.4, 564.0], [18.5, 564.0], [18.6, 564.0], [18.7, 564.0], [18.8, 564.0], [18.9, 564.0], [19.0, 564.0], [19.1, 564.0], [19.2, 564.0], [19.3, 564.0], [19.4, 564.0], [19.5, 564.0], [19.6, 564.0], [19.7, 564.0], [19.8, 564.0], [19.9, 564.0], [20.0, 567.0], [20.1, 567.0], [20.2, 567.0], [20.3, 567.0], [20.4, 567.0], [20.5, 568.0], [20.6, 568.0], [20.7, 568.0], [20.8, 568.0], [20.9, 568.0], [21.0, 569.0], [21.1, 569.0], [21.2, 569.0], [21.3, 569.0], [21.4, 569.0], [21.5, 570.0], [21.6, 570.0], [21.7, 570.0], [21.8, 570.0], [21.9, 570.0], [22.0, 572.0], [22.1, 572.0], [22.2, 572.0], [22.3, 572.0], [22.4, 572.0], [22.5, 578.0], [22.6, 578.0], [22.7, 578.0], [22.8, 578.0], [22.9, 578.0], [23.0, 578.0], [23.1, 578.0], [23.2, 578.0], [23.3, 578.0], [23.4, 578.0], [23.5, 579.0], [23.6, 579.0], [23.7, 579.0], [23.8, 579.0], [23.9, 579.0], [24.0, 579.0], [24.1, 579.0], [24.2, 579.0], [24.3, 579.0], [24.4, 579.0], [24.5, 580.0], [24.6, 580.0], [24.7, 580.0], [24.8, 580.0], [24.9, 580.0], [25.0, 583.0], [25.1, 583.0], [25.2, 583.0], [25.3, 583.0], [25.4, 583.0], [25.5, 584.0], [25.6, 584.0], [25.7, 584.0], [25.8, 584.0], [25.9, 584.0], [26.0, 585.0], [26.1, 585.0], [26.2, 585.0], [26.3, 585.0], [26.4, 585.0], [26.5, 588.0], [26.6, 588.0], [26.7, 588.0], [26.8, 588.0], [26.9, 588.0], [27.0, 589.0], [27.1, 589.0], [27.2, 589.0], [27.3, 589.0], [27.4, 589.0], [27.5, 589.0], [27.6, 589.0], [27.7, 589.0], [27.8, 589.0], [27.9, 589.0], [28.0, 590.0], [28.1, 590.0], [28.2, 590.0], [28.3, 590.0], [28.4, 590.0], [28.5, 590.0], [28.6, 590.0], [28.7, 590.0], [28.8, 590.0], [28.9, 590.0], [29.0, 592.0], [29.1, 592.0], [29.2, 592.0], [29.3, 592.0], [29.4, 592.0], [29.5, 592.0], [29.6, 592.0], [29.7, 592.0], [29.8, 592.0], [29.9, 592.0], [30.0, 592.0], [30.1, 592.0], [30.2, 592.0], [30.3, 592.0], [30.4, 592.0], [30.5, 593.0], [30.6, 593.0], [30.7, 593.0], [30.8, 593.0], [30.9, 593.0], [31.0, 595.0], [31.1, 595.0], [31.2, 595.0], [31.3, 595.0], [31.4, 595.0], [31.5, 596.0], [31.6, 596.0], [31.7, 596.0], [31.8, 596.0], [31.9, 596.0], [32.0, 597.0], [32.1, 597.0], [32.2, 597.0], [32.3, 597.0], [32.4, 597.0], [32.5, 597.0], [32.6, 597.0], [32.7, 597.0], [32.8, 597.0], [32.9, 597.0], [33.0, 597.0], [33.1, 597.0], [33.2, 597.0], [33.3, 597.0], [33.4, 597.0], [33.5, 598.0], [33.6, 598.0], [33.7, 598.0], [33.8, 598.0], [33.9, 598.0], [34.0, 598.0], [34.1, 598.0], [34.2, 598.0], [34.3, 598.0], [34.4, 598.0], [34.5, 600.0], [34.6, 600.0], [34.7, 600.0], [34.8, 600.0], [34.9, 600.0], [35.0, 601.0], [35.1, 601.0], [35.2, 601.0], [35.3, 601.0], [35.4, 601.0], [35.5, 603.0], [35.6, 603.0], [35.7, 603.0], [35.8, 603.0], [35.9, 603.0], [36.0, 605.0], [36.1, 605.0], [36.2, 605.0], [36.3, 605.0], [36.4, 605.0], [36.5, 607.0], [36.6, 607.0], [36.7, 607.0], [36.8, 607.0], [36.9, 607.0], [37.0, 608.0], [37.1, 608.0], [37.2, 608.0], [37.3, 608.0], [37.4, 608.0], [37.5, 609.0], [37.6, 609.0], [37.7, 609.0], [37.8, 609.0], [37.9, 609.0], [38.0, 609.0], [38.1, 609.0], [38.2, 609.0], [38.3, 609.0], [38.4, 609.0], [38.5, 609.0], [38.6, 609.0], [38.7, 609.0], [38.8, 609.0], [38.9, 609.0], [39.0, 610.0], [39.1, 610.0], [39.2, 610.0], [39.3, 610.0], [39.4, 610.0], [39.5, 615.0], [39.6, 615.0], [39.7, 615.0], [39.8, 615.0], [39.9, 615.0], [40.0, 617.0], [40.1, 617.0], [40.2, 617.0], [40.3, 617.0], [40.4, 617.0], [40.5, 623.0], [40.6, 623.0], [40.7, 623.0], [40.8, 623.0], [40.9, 623.0], [41.0, 623.0], [41.1, 623.0], [41.2, 623.0], [41.3, 623.0], [41.4, 623.0], [41.5, 624.0], [41.6, 624.0], [41.7, 624.0], [41.8, 624.0], [41.9, 624.0], [42.0, 624.0], [42.1, 624.0], [42.2, 624.0], [42.3, 624.0], [42.4, 624.0], [42.5, 625.0], [42.6, 625.0], [42.7, 625.0], [42.8, 625.0], [42.9, 625.0], [43.0, 625.0], [43.1, 625.0], [43.2, 625.0], [43.3, 625.0], [43.4, 625.0], [43.5, 625.0], [43.6, 625.0], [43.7, 625.0], [43.8, 625.0], [43.9, 625.0], [44.0, 627.0], [44.1, 627.0], [44.2, 627.0], [44.3, 627.0], [44.4, 627.0], [44.5, 629.0], [44.6, 629.0], [44.7, 629.0], [44.8, 629.0], [44.9, 629.0], [45.0, 631.0], [45.1, 631.0], [45.2, 631.0], [45.3, 631.0], [45.4, 631.0], [45.5, 632.0], [45.6, 632.0], [45.7, 632.0], [45.8, 632.0], [45.9, 632.0], [46.0, 633.0], [46.1, 633.0], [46.2, 633.0], [46.3, 633.0], [46.4, 633.0], [46.5, 635.0], [46.6, 635.0], [46.7, 635.0], [46.8, 635.0], [46.9, 635.0], [47.0, 637.0], [47.1, 637.0], [47.2, 637.0], [47.3, 637.0], [47.4, 637.0], [47.5, 638.0], [47.6, 638.0], [47.7, 638.0], [47.8, 638.0], [47.9, 638.0], [48.0, 640.0], [48.1, 640.0], [48.2, 640.0], [48.3, 640.0], [48.4, 640.0], [48.5, 643.0], [48.6, 643.0], [48.7, 643.0], [48.8, 643.0], [48.9, 643.0], [49.0, 646.0], [49.1, 646.0], [49.2, 646.0], [49.3, 646.0], [49.4, 646.0], [49.5, 648.0], [49.6, 648.0], [49.7, 648.0], [49.8, 648.0], [49.9, 648.0], [50.0, 651.0], [50.1, 651.0], [50.2, 651.0], [50.3, 651.0], [50.4, 651.0], [50.5, 651.0], [50.6, 651.0], [50.7, 651.0], [50.8, 651.0], [50.9, 651.0], [51.0, 652.0], [51.1, 652.0], [51.2, 652.0], [51.3, 652.0], [51.4, 652.0], [51.5, 653.0], [51.6, 653.0], [51.7, 653.0], [51.8, 653.0], [51.9, 653.0], [52.0, 660.0], [52.1, 660.0], [52.2, 660.0], [52.3, 660.0], [52.4, 660.0], [52.5, 662.0], [52.6, 662.0], [52.7, 662.0], [52.8, 662.0], [52.9, 662.0], [53.0, 662.0], [53.1, 662.0], [53.2, 662.0], [53.3, 662.0], [53.4, 662.0], [53.5, 666.0], [53.6, 666.0], [53.7, 666.0], [53.8, 666.0], [53.9, 666.0], [54.0, 666.0], [54.1, 666.0], [54.2, 666.0], [54.3, 666.0], [54.4, 666.0], [54.5, 668.0], [54.6, 668.0], [54.7, 668.0], [54.8, 668.0], [54.9, 668.0], [55.0, 669.0], [55.1, 669.0], [55.2, 669.0], [55.3, 669.0], [55.4, 669.0], [55.5, 669.0], [55.6, 669.0], [55.7, 669.0], [55.8, 669.0], [55.9, 669.0], [56.0, 670.0], [56.1, 670.0], [56.2, 670.0], [56.3, 670.0], [56.4, 670.0], [56.5, 673.0], [56.6, 673.0], [56.7, 673.0], [56.8, 673.0], [56.9, 673.0], [57.0, 675.0], [57.1, 675.0], [57.2, 675.0], [57.3, 675.0], [57.4, 675.0], [57.5, 677.0], [57.6, 677.0], [57.7, 677.0], [57.8, 677.0], [57.9, 677.0], [58.0, 679.0], [58.1, 679.0], [58.2, 679.0], [58.3, 679.0], [58.4, 679.0], [58.5, 684.0], [58.6, 684.0], [58.7, 684.0], [58.8, 684.0], [58.9, 684.0], [59.0, 685.0], [59.1, 685.0], [59.2, 685.0], [59.3, 685.0], [59.4, 685.0], [59.5, 688.0], [59.6, 688.0], [59.7, 688.0], [59.8, 688.0], [59.9, 688.0], [60.0, 689.0], [60.1, 689.0], [60.2, 689.0], [60.3, 689.0], [60.4, 689.0], [60.5, 690.0], [60.6, 690.0], [60.7, 690.0], [60.8, 690.0], [60.9, 690.0], [61.0, 697.0], [61.1, 697.0], [61.2, 697.0], [61.3, 697.0], [61.4, 697.0], [61.5, 699.0], [61.6, 699.0], [61.7, 699.0], [61.8, 699.0], [61.9, 699.0], [62.0, 706.0], [62.1, 706.0], [62.2, 706.0], [62.3, 706.0], [62.4, 706.0], [62.5, 708.0], [62.6, 708.0], [62.7, 708.0], [62.8, 708.0], [62.9, 708.0], [63.0, 716.0], [63.1, 716.0], [63.2, 716.0], [63.3, 716.0], [63.4, 716.0], [63.5, 723.0], [63.6, 723.0], [63.7, 723.0], [63.8, 723.0], [63.9, 723.0], [64.0, 724.0], [64.1, 724.0], [64.2, 724.0], [64.3, 724.0], [64.4, 724.0], [64.5, 731.0], [64.6, 731.0], [64.7, 731.0], [64.8, 731.0], [64.9, 731.0], [65.0, 732.0], [65.1, 732.0], [65.2, 732.0], [65.3, 732.0], [65.4, 732.0], [65.5, 733.0], [65.6, 733.0], [65.7, 733.0], [65.8, 733.0], [65.9, 733.0], [66.0, 739.0], [66.1, 739.0], [66.2, 739.0], [66.3, 739.0], [66.4, 739.0], [66.5, 740.0], [66.6, 740.0], [66.7, 740.0], [66.8, 740.0], [66.9, 740.0], [67.0, 743.0], [67.1, 743.0], [67.2, 743.0], [67.3, 743.0], [67.4, 743.0], [67.5, 764.0], [67.6, 764.0], [67.7, 764.0], [67.8, 764.0], [67.9, 764.0], [68.0, 766.0], [68.1, 766.0], [68.2, 766.0], [68.3, 766.0], [68.4, 766.0], [68.5, 770.0], [68.6, 770.0], [68.7, 770.0], [68.8, 770.0], [68.9, 770.0], [69.0, 789.0], [69.1, 789.0], [69.2, 789.0], [69.3, 789.0], [69.4, 789.0], [69.5, 790.0], [69.6, 790.0], [69.7, 790.0], [69.8, 790.0], [69.9, 790.0], [70.0, 794.0], [70.1, 794.0], [70.2, 794.0], [70.3, 794.0], [70.4, 794.0], [70.5, 806.0], [70.6, 806.0], [70.7, 806.0], [70.8, 806.0], [70.9, 806.0], [71.0, 810.0], [71.1, 810.0], [71.2, 810.0], [71.3, 810.0], [71.4, 810.0], [71.5, 812.0], [71.6, 812.0], [71.7, 812.0], [71.8, 812.0], [71.9, 812.0], [72.0, 813.0], [72.1, 813.0], [72.2, 813.0], [72.3, 813.0], [72.4, 813.0], [72.5, 815.0], [72.6, 815.0], [72.7, 815.0], [72.8, 815.0], [72.9, 815.0], [73.0, 817.0], [73.1, 817.0], [73.2, 817.0], [73.3, 817.0], [73.4, 817.0], [73.5, 817.0], [73.6, 817.0], [73.7, 817.0], [73.8, 817.0], [73.9, 817.0], [74.0, 817.0], [74.1, 817.0], [74.2, 817.0], [74.3, 817.0], [74.4, 817.0], [74.5, 819.0], [74.6, 819.0], [74.7, 819.0], [74.8, 819.0], [74.9, 819.0], [75.0, 820.0], [75.1, 820.0], [75.2, 820.0], [75.3, 820.0], [75.4, 820.0], [75.5, 821.0], [75.6, 821.0], [75.7, 821.0], [75.8, 821.0], [75.9, 821.0], [76.0, 822.0], [76.1, 822.0], [76.2, 822.0], [76.3, 822.0], [76.4, 822.0], [76.5, 827.0], [76.6, 827.0], [76.7, 827.0], [76.8, 827.0], [76.9, 827.0], [77.0, 832.0], [77.1, 832.0], [77.2, 832.0], [77.3, 832.0], [77.4, 832.0], [77.5, 835.0], [77.6, 835.0], [77.7, 835.0], [77.8, 835.0], [77.9, 835.0], [78.0, 837.0], [78.1, 837.0], [78.2, 837.0], [78.3, 837.0], [78.4, 837.0], [78.5, 840.0], [78.6, 840.0], [78.7, 840.0], [78.8, 840.0], [78.9, 840.0], [79.0, 841.0], [79.1, 841.0], [79.2, 841.0], [79.3, 841.0], [79.4, 841.0], [79.5, 846.0], [79.6, 846.0], [79.7, 846.0], [79.8, 846.0], [79.9, 846.0], [80.0, 846.0], [80.1, 846.0], [80.2, 846.0], [80.3, 846.0], [80.4, 846.0], [80.5, 854.0], [80.6, 854.0], [80.7, 854.0], [80.8, 854.0], [80.9, 854.0], [81.0, 859.0], [81.1, 859.0], [81.2, 859.0], [81.3, 859.0], [81.4, 859.0], [81.5, 859.0], [81.6, 859.0], [81.7, 859.0], [81.8, 859.0], [81.9, 859.0], [82.0, 860.0], [82.1, 860.0], [82.2, 860.0], [82.3, 860.0], [82.4, 860.0], [82.5, 871.0], [82.6, 871.0], [82.7, 871.0], [82.8, 871.0], [82.9, 871.0], [83.0, 878.0], [83.1, 878.0], [83.2, 878.0], [83.3, 878.0], [83.4, 878.0], [83.5, 880.0], [83.6, 880.0], [83.7, 880.0], [83.8, 880.0], [83.9, 880.0], [84.0, 883.0], [84.1, 883.0], [84.2, 883.0], [84.3, 883.0], [84.4, 883.0], [84.5, 892.0], [84.6, 892.0], [84.7, 892.0], [84.8, 892.0], [84.9, 892.0], [85.0, 901.0], [85.1, 901.0], [85.2, 901.0], [85.3, 901.0], [85.4, 901.0], [85.5, 915.0], [85.6, 915.0], [85.7, 915.0], [85.8, 915.0], [85.9, 915.0], [86.0, 933.0], [86.1, 933.0], [86.2, 933.0], [86.3, 933.0], [86.4, 933.0], [86.5, 952.0], [86.6, 952.0], [86.7, 952.0], [86.8, 952.0], [86.9, 952.0], [87.0, 956.0], [87.1, 956.0], [87.2, 956.0], [87.3, 956.0], [87.4, 956.0], [87.5, 969.0], [87.6, 969.0], [87.7, 969.0], [87.8, 969.0], [87.9, 969.0], [88.0, 972.0], [88.1, 972.0], [88.2, 972.0], [88.3, 972.0], [88.4, 972.0], [88.5, 975.0], [88.6, 975.0], [88.7, 975.0], [88.8, 975.0], [88.9, 975.0], [89.0, 980.0], [89.1, 980.0], [89.2, 980.0], [89.3, 980.0], [89.4, 980.0], [89.5, 987.0], [89.6, 987.0], [89.7, 987.0], [89.8, 987.0], [89.9, 987.0], [90.0, 995.0], [90.1, 995.0], [90.2, 995.0], [90.3, 995.0], [90.4, 995.0], [90.5, 998.0], [90.6, 998.0], [90.7, 998.0], [90.8, 998.0], [90.9, 998.0], [91.0, 1005.0], [91.1, 1005.0], [91.2, 1005.0], [91.3, 1005.0], [91.4, 1005.0], [91.5, 1015.0], [91.6, 1015.0], [91.7, 1015.0], [91.8, 1015.0], [91.9, 1015.0], [92.0, 1029.0], [92.1, 1029.0], [92.2, 1029.0], [92.3, 1029.0], [92.4, 1029.0], [92.5, 1041.0], [92.6, 1041.0], [92.7, 1041.0], [92.8, 1041.0], [92.9, 1041.0], [93.0, 1051.0], [93.1, 1051.0], [93.2, 1051.0], [93.3, 1051.0], [93.4, 1051.0], [93.5, 1059.0], [93.6, 1059.0], [93.7, 1059.0], [93.8, 1059.0], [93.9, 1059.0], [94.0, 1077.0], [94.1, 1077.0], [94.2, 1077.0], [94.3, 1077.0], [94.4, 1077.0], [94.5, 1091.0], [94.6, 1091.0], [94.7, 1091.0], [94.8, 1091.0], [94.9, 1091.0], [95.0, 1172.0], [95.1, 1172.0], [95.2, 1172.0], [95.3, 1172.0], [95.4, 1172.0], [95.5, 1240.0], [95.6, 1240.0], [95.7, 1240.0], [95.8, 1240.0], [95.9, 1240.0], [96.0, 1274.0], [96.1, 1274.0], [96.2, 1274.0], [96.3, 1274.0], [96.4, 1274.0], [96.5, 1369.0], [96.6, 1369.0], [96.7, 1369.0], [96.8, 1369.0], [96.9, 1369.0], [97.0, 1459.0], [97.1, 1459.0], [97.2, 1459.0], [97.3, 1459.0], [97.4, 1459.0], [97.5, 1509.0], [97.6, 1509.0], [97.7, 1509.0], [97.8, 1509.0], [97.9, 1509.0], [98.0, 1633.0], [98.1, 1633.0], [98.2, 1633.0], [98.3, 1633.0], [98.4, 1633.0], [98.5, 1649.0], [98.6, 1649.0], [98.7, 1649.0], [98.8, 1649.0], [98.9, 1649.0], [99.0, 2236.0], [99.1, 2236.0], [99.2, 2236.0], [99.3, 2236.0], [99.4, 2236.0], [99.5, 2813.0], [99.6, 2813.0], [99.7, 2813.0], [99.8, 2813.0], [99.9, 2813.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 65.0, "series": [{"data": [[2200.0, 1.0], [600.0, 55.0], [700.0, 17.0], [2800.0, 1.0], [800.0, 29.0], [900.0, 12.0], [1000.0, 8.0], [1100.0, 1.0], [1200.0, 2.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [400.0, 4.0], [1600.0, 2.0], [500.0, 65.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 191.0, "series": [{"data": [[0.0, 4.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 191.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.183333333333332, "minX": 1.79553672E12, "maxY": 10.857142857142854, "series": [{"data": [[1.79553678E12, 10.857142857142854], [1.79553672E12, 9.183333333333332]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553678E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 574.75, "minX": 1.0, "maxY": 926.1111111111112, "series": [{"data": [[8.0, 926.1111111111112], [2.0, 628.0], [9.0, 607.1111111111111], [10.0, 653.3809523809524], [11.0, 861.3714285714285], [12.0, 662.78125], [3.0, 574.75], [13.0, 625.8529411764706], [14.0, 813.1111111111112], [15.0, 841.75], [4.0, 852.8333333333333], [1.0, 906.0], [5.0, 766.8333333333333], [6.0, 846.9999999999999], [7.0, 611.2]], "isOverall": false, "label": "Login Request", "isController": false}, {"data": [[10.355000000000011, 736.5550000000001]], "isOverall": false, "label": "Login Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 228.85, "minX": 1.79553672E12, "maxY": 2070.3333333333335, "series": [{"data": [[1.79553678E12, 2070.3333333333335], [1.79553672E12, 887.1833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79553678E12, 533.8166666666667], [1.79553672E12, 228.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553678E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 626.2500000000001, "minX": 1.79553672E12, "maxY": 783.8285714285714, "series": [{"data": [[1.79553678E12, 783.8285714285714], [1.79553672E12, 626.2500000000001]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553678E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 625.066666666667, "minX": 1.79553672E12, "maxY": 782.9214285714286, "series": [{"data": [[1.79553678E12, 782.9214285714286], [1.79553672E12, 625.066666666667]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553678E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 193.68333333333334, "minX": 1.79553672E12, "maxY": 288.6357142857142, "series": [{"data": [[1.79553678E12, 288.6357142857142], [1.79553672E12, 193.68333333333334]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553678E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 483.0, "minX": 1.79553672E12, "maxY": 1459.0, "series": [{"data": [[1.79553678E12, 1459.0], [1.79553672E12, 1369.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79553678E12, 483.0], [1.79553672E12, 497.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79553678E12, 991.4000000000001], [1.79553672E12, 723.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79553678E12, 1392.3999999999974], [1.79553672E12, 1369.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79553678E12, 684.0], [1.79553672E12, 597.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79553678E12, 1062.6], [1.79553672E12, 813.2999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553678E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 590.0, "minX": 2.0, "maxY": 2813.0, "series": [{"data": [[2.0, 812.0], [8.0, 837.0], [18.0, 597.5], [19.0, 590.0], [5.0, 723.0], [11.0, 625.0], [12.0, 688.5], [6.0, 643.0], [26.0, 594.0], [13.0, 770.0], [14.0, 688.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 2813.0], [12.0, 1571.0], [26.0, 1942.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 590.0, "minX": 2.0, "maxY": 2812.0, "series": [{"data": [[2.0, 811.0], [8.0, 836.0], [18.0, 597.0], [19.0, 590.0], [5.0, 722.0], [11.0, 623.0], [12.0, 687.5], [6.0, 642.0], [26.0, 593.0], [13.0, 768.0], [14.0, 686.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 2812.0], [12.0, 1570.0], [26.0, 1941.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.2333333333333334, "minX": 1.79553672E12, "maxY": 2.1, "series": [{"data": [[1.79553678E12, 2.1], [1.79553672E12, 1.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553678E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.79553672E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.79553678E12, 2.3333333333333335], [1.79553672E12, 1.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553678E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.79553672E12, "maxY": 2.25, "series": [{"data": [[1.79553678E12, 2.25], [1.79553672E12, 1.0]], "isOverall": false, "label": "Login Request-success", "isController": false}, {"data": [[1.79553678E12, 0.08333333333333333]], "isOverall": false, "label": "Login Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553678E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.79553672E12, "maxY": 2.25, "series": [{"data": [[1.79553678E12, 2.25], [1.79553672E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79553678E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553678E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

