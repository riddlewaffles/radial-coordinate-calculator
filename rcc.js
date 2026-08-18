function calculateCoordinates() {
    const r = parseFloat(document.getElementById('radius').value);
    const d = parseInt(document.getElementById('points').value);
    const tableBody = document.getElementById('results-body');

    tableBody.innerHTML = '';

    if (isNaN(r) || isNaN(d) || d <= 0) {
        alert('Please enter valid numeric values for radius and points (points must be > 0).');
        return;
    }

    for (let i = 0; i < d; i++) {
        const angleDeg = i * (360 / d);
        const angleRad = angleDeg * (Math.PI / 180);

        let x = r * Math.cos(angleRad);
        let y = r * Math.sin(angleRad);

        x = Math.abs(x) < 1e-10 ? 0.0 : Number(x.toFixed(4));
        y = Math.abs(y) < 1e-10 ? 0.0 : Number(y.toFixed(4));

        const row = document.createElement('tr');
            row.innerHTML = `
                <td>Point ${i + 1}</td>
                <td>${angleDeg.toFixed(1)}°</td>
                <td>(${x.toFixed(4)}, ${y.toFixed(4)})</td>
            `;

        tableBody.appendChild(row);
    }
}

document.getElementById('calc-btn').addEventListener('click', calculateCoordinates);

calculateCoordinates();
