(() => {
    window.addEventListener('load', () => {
        document.body.classList.remove('before-load');
    });
    
    document.querySelector('.loading').addEventListener('transitionend', (e) => {
        document.body.removeChild(e.currentTarget);
    });

    google.charts.load('current', { 'packages': ['corechart'] });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                console.log(document.getElementById('mild').textContent)
                var data = google.visualization.arrayToDataTable([
                    ['Class', 'Probability per Class'],
                    ['Mild', Number(document.getElementById('mild').textContent)],
                    ['Moderate', Number(document.getElementById('moderate').textContent)],
                    ['Normal', Number(document.getElementById('normal').textContent)],
                    ['Very Mild', Number(document.getElementById('very_mild').textContent)]
                ]);

                var options = {
                    title: 'predict Alzheimer disease'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            }
})();