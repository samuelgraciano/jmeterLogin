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
        data: {"result": {"minY": 487.0, "minX": 0.0, "maxY": 2166.0, "series": [{"data": [[0.0, 487.0], [0.1, 487.0], [0.2, 490.0], [0.3, 492.0], [0.4, 493.0], [0.5, 493.0], [0.6, 493.0], [0.7, 495.0], [0.8, 498.0], [0.9, 498.0], [1.0, 501.0], [1.1, 501.0], [1.2, 505.0], [1.3, 505.0], [1.4, 508.0], [1.5, 509.0], [1.6, 509.0], [1.7, 509.0], [1.8, 511.0], [1.9, 512.0], [2.0, 512.0], [2.1, 512.0], [2.2, 512.0], [2.3, 514.0], [2.4, 515.0], [2.5, 515.0], [2.6, 516.0], [2.7, 518.0], [2.8, 520.0], [2.9, 520.0], [3.0, 521.0], [3.1, 521.0], [3.2, 522.0], [3.3, 522.0], [3.4, 523.0], [3.5, 524.0], [3.6, 525.0], [3.7, 525.0], [3.8, 526.0], [3.9, 527.0], [4.0, 527.0], [4.1, 527.0], [4.2, 528.0], [4.3, 529.0], [4.4, 529.0], [4.5, 529.0], [4.6, 529.0], [4.7, 529.0], [4.8, 530.0], [4.9, 530.0], [5.0, 531.0], [5.1, 531.0], [5.2, 532.0], [5.3, 532.0], [5.4, 532.0], [5.5, 532.0], [5.6, 532.0], [5.7, 533.0], [5.8, 533.0], [5.9, 535.0], [6.0, 535.0], [6.1, 535.0], [6.2, 535.0], [6.3, 535.0], [6.4, 536.0], [6.5, 536.0], [6.6, 536.0], [6.7, 536.0], [6.8, 536.0], [6.9, 537.0], [7.0, 537.0], [7.1, 539.0], [7.2, 539.0], [7.3, 539.0], [7.4, 540.0], [7.5, 543.0], [7.6, 543.0], [7.7, 543.0], [7.8, 543.0], [7.9, 543.0], [8.0, 543.0], [8.1, 544.0], [8.2, 544.0], [8.3, 545.0], [8.4, 545.0], [8.5, 545.0], [8.6, 545.0], [8.7, 545.0], [8.8, 545.0], [8.9, 546.0], [9.0, 547.0], [9.1, 547.0], [9.2, 547.0], [9.3, 547.0], [9.4, 547.0], [9.5, 547.0], [9.6, 547.0], [9.7, 548.0], [9.8, 548.0], [9.9, 549.0], [10.0, 549.0], [10.1, 549.0], [10.2, 549.0], [10.3, 550.0], [10.4, 550.0], [10.5, 551.0], [10.6, 551.0], [10.7, 553.0], [10.8, 553.0], [10.9, 553.0], [11.0, 553.0], [11.1, 555.0], [11.2, 555.0], [11.3, 555.0], [11.4, 555.0], [11.5, 556.0], [11.6, 556.0], [11.7, 556.0], [11.8, 556.0], [11.9, 557.0], [12.0, 557.0], [12.1, 557.0], [12.2, 558.0], [12.3, 558.0], [12.4, 558.0], [12.5, 558.0], [12.6, 558.0], [12.7, 558.0], [12.8, 558.0], [12.9, 559.0], [13.0, 559.0], [13.1, 559.0], [13.2, 559.0], [13.3, 560.0], [13.4, 560.0], [13.5, 560.0], [13.6, 560.0], [13.7, 561.0], [13.8, 562.0], [13.9, 562.0], [14.0, 562.0], [14.1, 562.0], [14.2, 563.0], [14.3, 563.0], [14.4, 563.0], [14.5, 563.0], [14.6, 563.0], [14.7, 564.0], [14.8, 564.0], [14.9, 565.0], [15.0, 566.0], [15.1, 566.0], [15.2, 566.0], [15.3, 566.0], [15.4, 566.0], [15.5, 566.0], [15.6, 566.0], [15.7, 566.0], [15.8, 567.0], [15.9, 567.0], [16.0, 567.0], [16.1, 567.0], [16.2, 568.0], [16.3, 568.0], [16.4, 568.0], [16.5, 568.0], [16.6, 568.0], [16.7, 568.0], [16.8, 568.0], [16.9, 569.0], [17.0, 570.0], [17.1, 571.0], [17.2, 571.0], [17.3, 571.0], [17.4, 571.0], [17.5, 571.0], [17.6, 571.0], [17.7, 572.0], [17.8, 572.0], [17.9, 573.0], [18.0, 573.0], [18.1, 573.0], [18.2, 573.0], [18.3, 573.0], [18.4, 573.0], [18.5, 573.0], [18.6, 574.0], [18.7, 574.0], [18.8, 574.0], [18.9, 575.0], [19.0, 575.0], [19.1, 575.0], [19.2, 575.0], [19.3, 575.0], [19.4, 575.0], [19.5, 575.0], [19.6, 575.0], [19.7, 576.0], [19.8, 576.0], [19.9, 576.0], [20.0, 576.0], [20.1, 576.0], [20.2, 577.0], [20.3, 578.0], [20.4, 578.0], [20.5, 578.0], [20.6, 578.0], [20.7, 578.0], [20.8, 578.0], [20.9, 579.0], [21.0, 580.0], [21.1, 581.0], [21.2, 581.0], [21.3, 581.0], [21.4, 581.0], [21.5, 581.0], [21.6, 581.0], [21.7, 581.0], [21.8, 581.0], [21.9, 582.0], [22.0, 582.0], [22.1, 582.0], [22.2, 583.0], [22.3, 584.0], [22.4, 584.0], [22.5, 584.0], [22.6, 584.0], [22.7, 584.0], [22.8, 584.0], [22.9, 584.0], [23.0, 585.0], [23.1, 585.0], [23.2, 585.0], [23.3, 586.0], [23.4, 586.0], [23.5, 586.0], [23.6, 586.0], [23.7, 587.0], [23.8, 587.0], [23.9, 587.0], [24.0, 587.0], [24.1, 587.0], [24.2, 587.0], [24.3, 588.0], [24.4, 588.0], [24.5, 588.0], [24.6, 588.0], [24.7, 589.0], [24.8, 589.0], [24.9, 589.0], [25.0, 589.0], [25.1, 589.0], [25.2, 589.0], [25.3, 589.0], [25.4, 589.0], [25.5, 589.0], [25.6, 589.0], [25.7, 589.0], [25.8, 589.0], [25.9, 589.0], [26.0, 589.0], [26.1, 590.0], [26.2, 590.0], [26.3, 590.0], [26.4, 590.0], [26.5, 590.0], [26.6, 591.0], [26.7, 591.0], [26.8, 591.0], [26.9, 592.0], [27.0, 593.0], [27.1, 593.0], [27.2, 593.0], [27.3, 593.0], [27.4, 593.0], [27.5, 593.0], [27.6, 593.0], [27.7, 594.0], [27.8, 594.0], [27.9, 594.0], [28.0, 594.0], [28.1, 594.0], [28.2, 594.0], [28.3, 595.0], [28.4, 595.0], [28.5, 595.0], [28.6, 596.0], [28.7, 596.0], [28.8, 596.0], [28.9, 597.0], [29.0, 597.0], [29.1, 598.0], [29.2, 598.0], [29.3, 598.0], [29.4, 599.0], [29.5, 599.0], [29.6, 599.0], [29.7, 599.0], [29.8, 600.0], [29.9, 600.0], [30.0, 600.0], [30.1, 600.0], [30.2, 600.0], [30.3, 601.0], [30.4, 601.0], [30.5, 601.0], [30.6, 601.0], [30.7, 601.0], [30.8, 601.0], [30.9, 602.0], [31.0, 603.0], [31.1, 603.0], [31.2, 603.0], [31.3, 603.0], [31.4, 604.0], [31.5, 604.0], [31.6, 605.0], [31.7, 605.0], [31.8, 606.0], [31.9, 606.0], [32.0, 607.0], [32.1, 607.0], [32.2, 607.0], [32.3, 607.0], [32.4, 607.0], [32.5, 607.0], [32.6, 608.0], [32.7, 608.0], [32.8, 609.0], [32.9, 609.0], [33.0, 609.0], [33.1, 609.0], [33.2, 609.0], [33.3, 609.0], [33.4, 610.0], [33.5, 611.0], [33.6, 611.0], [33.7, 611.0], [33.8, 612.0], [33.9, 612.0], [34.0, 612.0], [34.1, 612.0], [34.2, 613.0], [34.3, 613.0], [34.4, 613.0], [34.5, 613.0], [34.6, 613.0], [34.7, 614.0], [34.8, 614.0], [34.9, 614.0], [35.0, 614.0], [35.1, 615.0], [35.2, 615.0], [35.3, 615.0], [35.4, 616.0], [35.5, 616.0], [35.6, 616.0], [35.7, 616.0], [35.8, 616.0], [35.9, 616.0], [36.0, 617.0], [36.1, 617.0], [36.2, 617.0], [36.3, 618.0], [36.4, 619.0], [36.5, 619.0], [36.6, 619.0], [36.7, 620.0], [36.8, 621.0], [36.9, 621.0], [37.0, 621.0], [37.1, 622.0], [37.2, 622.0], [37.3, 622.0], [37.4, 622.0], [37.5, 623.0], [37.6, 623.0], [37.7, 623.0], [37.8, 623.0], [37.9, 624.0], [38.0, 624.0], [38.1, 624.0], [38.2, 625.0], [38.3, 625.0], [38.4, 625.0], [38.5, 625.0], [38.6, 625.0], [38.7, 625.0], [38.8, 625.0], [38.9, 625.0], [39.0, 627.0], [39.1, 627.0], [39.2, 627.0], [39.3, 627.0], [39.4, 627.0], [39.5, 628.0], [39.6, 628.0], [39.7, 628.0], [39.8, 628.0], [39.9, 628.0], [40.0, 629.0], [40.1, 629.0], [40.2, 629.0], [40.3, 629.0], [40.4, 629.0], [40.5, 629.0], [40.6, 629.0], [40.7, 630.0], [40.8, 631.0], [40.9, 631.0], [41.0, 631.0], [41.1, 631.0], [41.2, 631.0], [41.3, 631.0], [41.4, 631.0], [41.5, 632.0], [41.6, 632.0], [41.7, 632.0], [41.8, 632.0], [41.9, 633.0], [42.0, 634.0], [42.1, 634.0], [42.2, 634.0], [42.3, 635.0], [42.4, 635.0], [42.5, 635.0], [42.6, 635.0], [42.7, 635.0], [42.8, 636.0], [42.9, 636.0], [43.0, 636.0], [43.1, 636.0], [43.2, 637.0], [43.3, 637.0], [43.4, 637.0], [43.5, 637.0], [43.6, 638.0], [43.7, 638.0], [43.8, 639.0], [43.9, 639.0], [44.0, 639.0], [44.1, 639.0], [44.2, 639.0], [44.3, 639.0], [44.4, 639.0], [44.5, 639.0], [44.6, 640.0], [44.7, 640.0], [44.8, 640.0], [44.9, 640.0], [45.0, 640.0], [45.1, 641.0], [45.2, 641.0], [45.3, 641.0], [45.4, 641.0], [45.5, 642.0], [45.6, 642.0], [45.7, 642.0], [45.8, 642.0], [45.9, 644.0], [46.0, 644.0], [46.1, 644.0], [46.2, 645.0], [46.3, 645.0], [46.4, 645.0], [46.5, 645.0], [46.6, 645.0], [46.7, 646.0], [46.8, 647.0], [46.9, 647.0], [47.0, 647.0], [47.1, 647.0], [47.2, 648.0], [47.3, 648.0], [47.4, 648.0], [47.5, 649.0], [47.6, 649.0], [47.7, 649.0], [47.8, 649.0], [47.9, 649.0], [48.0, 649.0], [48.1, 649.0], [48.2, 649.0], [48.3, 650.0], [48.4, 650.0], [48.5, 650.0], [48.6, 650.0], [48.7, 651.0], [48.8, 651.0], [48.9, 651.0], [49.0, 651.0], [49.1, 652.0], [49.2, 652.0], [49.3, 652.0], [49.4, 653.0], [49.5, 653.0], [49.6, 653.0], [49.7, 653.0], [49.8, 654.0], [49.9, 655.0], [50.0, 655.0], [50.1, 655.0], [50.2, 656.0], [50.3, 656.0], [50.4, 656.0], [50.5, 656.0], [50.6, 656.0], [50.7, 657.0], [50.8, 658.0], [50.9, 658.0], [51.0, 659.0], [51.1, 659.0], [51.2, 659.0], [51.3, 659.0], [51.4, 659.0], [51.5, 660.0], [51.6, 660.0], [51.7, 660.0], [51.8, 660.0], [51.9, 661.0], [52.0, 661.0], [52.1, 661.0], [52.2, 662.0], [52.3, 662.0], [52.4, 662.0], [52.5, 662.0], [52.6, 662.0], [52.7, 662.0], [52.8, 663.0], [52.9, 663.0], [53.0, 663.0], [53.1, 663.0], [53.2, 665.0], [53.3, 665.0], [53.4, 665.0], [53.5, 665.0], [53.6, 665.0], [53.7, 665.0], [53.8, 666.0], [53.9, 667.0], [54.0, 667.0], [54.1, 667.0], [54.2, 667.0], [54.3, 667.0], [54.4, 668.0], [54.5, 668.0], [54.6, 668.0], [54.7, 668.0], [54.8, 668.0], [54.9, 668.0], [55.0, 668.0], [55.1, 668.0], [55.2, 668.0], [55.3, 668.0], [55.4, 669.0], [55.5, 669.0], [55.6, 670.0], [55.7, 670.0], [55.8, 671.0], [55.9, 672.0], [56.0, 673.0], [56.1, 673.0], [56.2, 673.0], [56.3, 674.0], [56.4, 674.0], [56.5, 674.0], [56.6, 674.0], [56.7, 675.0], [56.8, 676.0], [56.9, 676.0], [57.0, 676.0], [57.1, 677.0], [57.2, 677.0], [57.3, 677.0], [57.4, 678.0], [57.5, 679.0], [57.6, 679.0], [57.7, 679.0], [57.8, 679.0], [57.9, 679.0], [58.0, 680.0], [58.1, 680.0], [58.2, 681.0], [58.3, 681.0], [58.4, 681.0], [58.5, 681.0], [58.6, 681.0], [58.7, 682.0], [58.8, 682.0], [58.9, 682.0], [59.0, 682.0], [59.1, 683.0], [59.2, 684.0], [59.3, 684.0], [59.4, 685.0], [59.5, 685.0], [59.6, 685.0], [59.7, 685.0], [59.8, 685.0], [59.9, 685.0], [60.0, 686.0], [60.1, 686.0], [60.2, 687.0], [60.3, 687.0], [60.4, 688.0], [60.5, 688.0], [60.6, 688.0], [60.7, 688.0], [60.8, 688.0], [60.9, 688.0], [61.0, 690.0], [61.1, 690.0], [61.2, 691.0], [61.3, 691.0], [61.4, 692.0], [61.5, 692.0], [61.6, 692.0], [61.7, 692.0], [61.8, 693.0], [61.9, 695.0], [62.0, 695.0], [62.1, 695.0], [62.2, 696.0], [62.3, 696.0], [62.4, 698.0], [62.5, 698.0], [62.6, 698.0], [62.7, 699.0], [62.8, 699.0], [62.9, 699.0], [63.0, 699.0], [63.1, 700.0], [63.2, 700.0], [63.3, 700.0], [63.4, 700.0], [63.5, 701.0], [63.6, 701.0], [63.7, 701.0], [63.8, 702.0], [63.9, 702.0], [64.0, 703.0], [64.1, 703.0], [64.2, 704.0], [64.3, 704.0], [64.4, 704.0], [64.5, 704.0], [64.6, 705.0], [64.7, 705.0], [64.8, 706.0], [64.9, 706.0], [65.0, 706.0], [65.1, 706.0], [65.2, 707.0], [65.3, 707.0], [65.4, 707.0], [65.5, 708.0], [65.6, 708.0], [65.7, 708.0], [65.8, 708.0], [65.9, 709.0], [66.0, 710.0], [66.1, 710.0], [66.2, 710.0], [66.3, 710.0], [66.4, 710.0], [66.5, 710.0], [66.6, 711.0], [66.7, 712.0], [66.8, 714.0], [66.9, 714.0], [67.0, 715.0], [67.1, 715.0], [67.2, 716.0], [67.3, 716.0], [67.4, 717.0], [67.5, 717.0], [67.6, 718.0], [67.7, 718.0], [67.8, 719.0], [67.9, 719.0], [68.0, 720.0], [68.1, 720.0], [68.2, 721.0], [68.3, 721.0], [68.4, 723.0], [68.5, 723.0], [68.6, 723.0], [68.7, 723.0], [68.8, 724.0], [68.9, 724.0], [69.0, 724.0], [69.1, 725.0], [69.2, 725.0], [69.3, 725.0], [69.4, 726.0], [69.5, 727.0], [69.6, 728.0], [69.7, 728.0], [69.8, 729.0], [69.9, 731.0], [70.0, 731.0], [70.1, 731.0], [70.2, 731.0], [70.3, 732.0], [70.4, 732.0], [70.5, 732.0], [70.6, 734.0], [70.7, 734.0], [70.8, 734.0], [70.9, 734.0], [71.0, 735.0], [71.1, 736.0], [71.2, 736.0], [71.3, 736.0], [71.4, 736.0], [71.5, 737.0], [71.6, 737.0], [71.7, 739.0], [71.8, 739.0], [71.9, 740.0], [72.0, 740.0], [72.1, 740.0], [72.2, 742.0], [72.3, 742.0], [72.4, 743.0], [72.5, 743.0], [72.6, 744.0], [72.7, 744.0], [72.8, 744.0], [72.9, 746.0], [73.0, 746.0], [73.1, 747.0], [73.2, 747.0], [73.3, 747.0], [73.4, 747.0], [73.5, 749.0], [73.6, 749.0], [73.7, 751.0], [73.8, 751.0], [73.9, 752.0], [74.0, 752.0], [74.1, 754.0], [74.2, 754.0], [74.3, 755.0], [74.4, 755.0], [74.5, 756.0], [74.6, 757.0], [74.7, 757.0], [74.8, 757.0], [74.9, 757.0], [75.0, 759.0], [75.1, 759.0], [75.2, 759.0], [75.3, 760.0], [75.4, 760.0], [75.5, 762.0], [75.6, 762.0], [75.7, 762.0], [75.8, 762.0], [75.9, 762.0], [76.0, 762.0], [76.1, 762.0], [76.2, 763.0], [76.3, 764.0], [76.4, 764.0], [76.5, 769.0], [76.6, 770.0], [76.7, 771.0], [76.8, 771.0], [76.9, 772.0], [77.0, 772.0], [77.1, 772.0], [77.2, 772.0], [77.3, 772.0], [77.4, 774.0], [77.5, 774.0], [77.6, 774.0], [77.7, 775.0], [77.8, 778.0], [77.9, 780.0], [78.0, 780.0], [78.1, 781.0], [78.2, 781.0], [78.3, 781.0], [78.4, 781.0], [78.5, 783.0], [78.6, 787.0], [78.7, 789.0], [78.8, 789.0], [78.9, 789.0], [79.0, 790.0], [79.1, 790.0], [79.2, 790.0], [79.3, 797.0], [79.4, 799.0], [79.5, 800.0], [79.6, 800.0], [79.7, 800.0], [79.8, 801.0], [79.9, 802.0], [80.0, 802.0], [80.1, 802.0], [80.2, 802.0], [80.3, 802.0], [80.4, 802.0], [80.5, 803.0], [80.6, 805.0], [80.7, 806.0], [80.8, 806.0], [80.9, 809.0], [81.0, 810.0], [81.1, 810.0], [81.2, 810.0], [81.3, 816.0], [81.4, 818.0], [81.5, 827.0], [81.6, 827.0], [81.7, 828.0], [81.8, 835.0], [81.9, 835.0], [82.0, 835.0], [82.1, 841.0], [82.2, 845.0], [82.3, 847.0], [82.4, 847.0], [82.5, 849.0], [82.6, 849.0], [82.7, 849.0], [82.8, 849.0], [82.9, 852.0], [83.0, 852.0], [83.1, 855.0], [83.2, 855.0], [83.3, 855.0], [83.4, 860.0], [83.5, 874.0], [83.6, 874.0], [83.7, 874.0], [83.8, 877.0], [83.9, 878.0], [84.0, 878.0], [84.1, 879.0], [84.2, 880.0], [84.3, 883.0], [84.4, 883.0], [84.5, 883.0], [84.6, 885.0], [84.7, 886.0], [84.8, 886.0], [84.9, 891.0], [85.0, 892.0], [85.1, 893.0], [85.2, 893.0], [85.3, 894.0], [85.4, 896.0], [85.5, 898.0], [85.6, 898.0], [85.7, 899.0], [85.8, 899.0], [85.9, 902.0], [86.0, 902.0], [86.1, 902.0], [86.2, 904.0], [86.3, 905.0], [86.4, 905.0], [86.5, 907.0], [86.6, 908.0], [86.7, 912.0], [86.8, 912.0], [86.9, 920.0], [87.0, 921.0], [87.1, 923.0], [87.2, 923.0], [87.3, 926.0], [87.4, 929.0], [87.5, 930.0], [87.6, 930.0], [87.7, 931.0], [87.8, 935.0], [87.9, 942.0], [88.0, 942.0], [88.1, 945.0], [88.2, 946.0], [88.3, 948.0], [88.4, 948.0], [88.5, 950.0], [88.6, 950.0], [88.7, 956.0], [88.8, 956.0], [88.9, 956.0], [89.0, 956.0], [89.1, 959.0], [89.2, 959.0], [89.3, 961.0], [89.4, 964.0], [89.5, 964.0], [89.6, 964.0], [89.7, 968.0], [89.8, 969.0], [89.9, 970.0], [90.0, 970.0], [90.1, 978.0], [90.2, 980.0], [90.3, 983.0], [90.4, 983.0], [90.5, 983.0], [90.6, 991.0], [90.7, 1002.0], [90.8, 1002.0], [90.9, 1009.0], [91.0, 1010.0], [91.1, 1024.0], [91.2, 1024.0], [91.3, 1025.0], [91.4, 1035.0], [91.5, 1038.0], [91.6, 1038.0], [91.7, 1038.0], [91.8, 1045.0], [91.9, 1046.0], [92.0, 1046.0], [92.1, 1048.0], [92.2, 1048.0], [92.3, 1048.0], [92.4, 1048.0], [92.5, 1055.0], [92.6, 1068.0], [92.7, 1077.0], [92.8, 1077.0], [92.9, 1079.0], [93.0, 1089.0], [93.1, 1089.0], [93.2, 1089.0], [93.3, 1095.0], [93.4, 1096.0], [93.5, 1109.0], [93.6, 1109.0], [93.7, 1115.0], [93.8, 1117.0], [93.9, 1129.0], [94.0, 1129.0], [94.1, 1138.0], [94.2, 1177.0], [94.3, 1198.0], [94.4, 1198.0], [94.5, 1202.0], [94.6, 1209.0], [94.7, 1210.0], [94.8, 1210.0], [94.9, 1211.0], [95.0, 1228.0], [95.1, 1268.0], [95.2, 1268.0], [95.3, 1289.0], [95.4, 1321.0], [95.5, 1359.0], [95.6, 1359.0], [95.7, 1372.0], [95.8, 1387.0], [95.9, 1392.0], [96.0, 1392.0], [96.1, 1419.0], [96.2, 1425.0], [96.3, 1433.0], [96.4, 1433.0], [96.5, 1456.0], [96.6, 1461.0], [96.7, 1467.0], [96.8, 1467.0], [96.9, 1471.0], [97.0, 1477.0], [97.1, 1482.0], [97.2, 1482.0], [97.3, 1487.0], [97.4, 1489.0], [97.5, 1494.0], [97.6, 1494.0], [97.7, 1495.0], [97.8, 1496.0], [97.9, 1511.0], [98.0, 1511.0], [98.1, 1513.0], [98.2, 1524.0], [98.3, 1527.0], [98.4, 1527.0], [98.5, 1536.0], [98.6, 1544.0], [98.7, 1544.0], [98.8, 1544.0], [98.9, 1553.0], [99.0, 1581.0], [99.1, 1593.0], [99.2, 1593.0], [99.3, 1610.0], [99.4, 1625.0], [99.5, 1718.0], [99.6, 1718.0], [99.7, 1803.0], [99.8, 1859.0], [99.9, 2166.0], [100.0, 2166.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 250.0, "series": [{"data": [[2100.0, 1.0], [600.0, 250.0], [700.0, 123.0], [800.0, 48.0], [900.0, 36.0], [1000.0, 21.0], [1100.0, 7.0], [1200.0, 7.0], [1300.0, 5.0], [1400.0, 14.0], [1500.0, 10.0], [400.0, 7.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 216.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 727.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 727.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 16.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.805333333333344, "minX": 1.79553444E12, "maxY": 42.805333333333344, "series": [{"data": [[1.79553444E12, 42.805333333333344]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553444E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 552.0, "minX": 1.0, "maxY": 1283.142857142857, "series": [{"data": [[2.0, 710.0], [3.0, 673.0], [4.0, 682.0], [6.0, 644.3333333333334], [7.0, 591.0], [8.0, 663.0], [9.0, 552.0], [10.0, 579.0], [11.0, 588.6], [12.0, 651.4], [13.0, 557.0], [14.0, 661.0], [15.0, 699.5555555555555], [16.0, 1283.142857142857], [17.0, 594.5], [18.0, 661.5], [19.0, 603.0], [20.0, 568.2857142857142], [21.0, 562.8888888888889], [22.0, 556.6666666666666], [23.0, 581.75], [24.0, 574.5], [25.0, 589.4666666666668], [26.0, 574.7692307692308], [27.0, 565.0], [28.0, 556.6], [29.0, 585.4615384615383], [30.0, 632.25], [31.0, 676.1333333333334], [32.0, 702.6428571428572], [33.0, 631.2307692307693], [34.0, 669.0555555555555], [35.0, 566.75], [36.0, 586.470588235294], [37.0, 587.6], [38.0, 610.5], [39.0, 709.125], [40.0, 627.5000000000001], [41.0, 580.2], [42.0, 688.0909090909092], [43.0, 747.2142857142856], [44.0, 827.6111111111111], [45.0, 686.2413793103449], [46.0, 735.5600000000001], [47.0, 781.2727272727273], [48.0, 748.4666666666667], [49.0, 804.0740740740742], [50.0, 759.6428571428571], [51.0, 680.9285714285713], [52.0, 587.7142857142857], [53.0, 717.9285714285714], [54.0, 905.1621621621621], [55.0, 782.8627450980392], [56.0, 900.2333333333332], [57.0, 791.5138888888889], [58.0, 827.7222222222224], [59.0, 616.0], [60.0, 761.3636363636365], [61.0, 774.4], [62.0, 906.5714285714286], [63.0, 930.8888888888889], [1.0, 615.0]], "isOverall": false, "label": "Login Request", "isController": false}, {"data": [[42.805333333333344, 725.5973333333327]], "isOverall": false, "label": "Login Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 63.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2860.0, "minX": 1.79553444E12, "maxY": 11088.933333333332, "series": [{"data": [[1.79553444E12, 11088.933333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79553444E12, 2860.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553444E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 725.5973333333327, "minX": 1.79553444E12, "maxY": 725.5973333333327, "series": [{"data": [[1.79553444E12, 725.5973333333327]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553444E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 725.0079999999998, "minX": 1.79553444E12, "maxY": 725.0079999999998, "series": [{"data": [[1.79553444E12, 725.0079999999998]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553444E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 257.57866666666746, "minX": 1.79553444E12, "maxY": 257.57866666666746, "series": [{"data": [[1.79553444E12, 257.57866666666746]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553444E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 487.0, "minX": 1.79553444E12, "maxY": 1496.0, "series": [{"data": [[1.79553444E12, 1496.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79553444E12, 487.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79553444E12, 945.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79553444E12, 1474.8999999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79553444E12, 651.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79553444E12, 1089.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 575.0, "minX": 1.0, "maxY": 2166.0, "series": [{"data": [[32.0, 577.5], [38.0, 575.0], [42.0, 885.5], [3.0, 744.0], [52.0, 588.0], [59.0, 580.0], [60.0, 651.5], [62.0, 814.0], [65.0, 740.0], [64.0, 663.5], [1.0, 615.0], [17.0, 599.0], [76.0, 658.0], [85.0, 663.0], [30.0, 585.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[65.0, 2166.0], [85.0, 1536.0], [30.0, 1760.5], [62.0, 1548.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 574.5, "minX": 1.0, "maxY": 2165.0, "series": [{"data": [[32.0, 577.5], [38.0, 574.5], [42.0, 885.5], [3.0, 741.0], [52.0, 586.5], [59.0, 580.0], [60.0, 651.5], [62.0, 813.5], [65.0, 739.5], [64.0, 663.5], [1.0, 614.0], [17.0, 598.0], [76.0, 658.0], [85.0, 662.5], [30.0, 584.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[65.0, 2165.0], [85.0, 1535.0], [30.0, 1759.5], [62.0, 1548.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.5, "minX": 1.79553444E12, "maxY": 12.5, "series": [{"data": [[1.79553444E12, 12.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553444E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.5, "minX": 1.79553444E12, "maxY": 12.5, "series": [{"data": [[1.79553444E12, 12.5]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79553444E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.79553444E12, "maxY": 12.233333333333333, "series": [{"data": [[1.79553444E12, 12.233333333333333]], "isOverall": false, "label": "Login Request-success", "isController": false}, {"data": [[1.79553444E12, 0.26666666666666666]], "isOverall": false, "label": "Login Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553444E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.79553444E12, "maxY": 12.233333333333333, "series": [{"data": [[1.79553444E12, 12.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79553444E12, 0.26666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79553444E12, "title": "Total Transactions Per Second"}},
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

