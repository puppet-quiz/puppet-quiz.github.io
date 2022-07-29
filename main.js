    $(document).ready(function () {
        $('#search').suggestionBox({
            filter: true,
            widthAdjustment: -8,
            leftOffset: 4,
            topOffset: 0,
        }).loadSuggestions('/data.json');
    });