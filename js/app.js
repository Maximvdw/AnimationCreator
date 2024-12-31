'use strict';

$(window).resize(updateHeights);
$(document).ready(function() {
    updateHeights();
    $("#frameText").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#addFrameButton").click();
        }
    });
    initContextInput();
});

function updateHeights() {
    var bodyheight = $(document).height();
    $("#frames").height(Math.max(240, 240 + (bodyheight - 600)));
    $("#yaml").height(Math.max(186, 186 + (bodyheight - 600)));
}

function initContextInput() {
    context.init({ preventDoubleContext: false });
    context.settings({ compress: true });

    context.attach('#frameText', [
        { header: 'Frame options' },
        { text: 'Insert color ...', subMenu: getColorSubMenu() },
        { text: 'Insert effect ...', subMenu: getEffectSubMenu() },
        { divider: true },
        { text: clearInput ? "Keep input on enter" : "Clear input on enter", action: toggleClearInput }
    ]);
}

function getColorSubMenu() {
    return [
        { header: 'Minecraft colors' },
        { text: "Dark colors ...", subMenu: getDarkColors() },
        { text: "Light colors ...", subMenu: getLightColors() }
    ];
}

function getDarkColors() {
    return [
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&0Black')), action: () => appendToFrameText("&0") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&1Dark blue')), action: () => appendToFrameText("&1") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&2Dark green')), action: () => appendToFrameText("&2") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&3Dark aqua')), action: () => appendToFrameText("&3") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&4Dark red')), action: () => appendToFrameText("&4") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&5Purple')), action: () => appendToFrameText("&5") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&8Dark grey')), action: () => appendToFrameText("&8") }
    ];
}

function getLightColors() {
    return [
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&6Orange')), action: () => appendToFrameText("&6") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&7Grey')), action: () => appendToFrameText("&7") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&9Indigo')), action: () => appendToFrameText("&9") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&aGreen')), action: () => appendToFrameText("&a") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&bAqua')), action: () => appendToFrameText("&b") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&cRed')), action: () => appendToFrameText("&c") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&dPink')), action: () => appendToFrameText("&d") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&eYellow')), action: () => appendToFrameText("&e") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&fWhite')), action: () => appendToFrameText("&f") }
    ];
}

function getEffectSubMenu() {
    return [
        { header: 'Minecraft effects' },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&f&lBOLD')), action: () => appendToFrameText("&l") },
        { text: convertToMinecraftChat(convertMinecraftTextToHTML('&f&oItalic')), action: () => appendToFrameText("&o") }
    ];
}

function appendToFrameText(text) {
    $('#frameText').val($('#frameText').val() + text);
}

function toggleClearInput() {
    clearInput = !clearInput;
    context.destroy('#frameText');
    initContextInput();
}

var animationCreator = angular.module('animationCreator', []);
animationCreator.controller('AnimationController', ['$scope', '$sce', '$interval', function($scope, $sce, $interval) {
    $scope.animation = [];
    $scope.interval = 20;
    $scope.random = false;
    $scope.index = 0;
    $scope.yaml = getYaml();

    $scope.addFrame = function() {
        var line = $('#frameText').val();
        var frame = {
            yaml: line,
            html: convertMinecraftTextToHTML(line)
        };
        $scope.animation.push(frame);
        $scope.updateYaml();
        if (clearInput) {
            $('#frameText').val("");
        }
    };

    $scope.removeFrame = function(index) {
        $scope.animation.splice(index, 1);
        $scope.updateYaml();
    };

    $scope.moveUp = function(index) {
        if (index > 0) {
            $scope.animation = $scope.animation.move(index, index - 1);
            $scope.updateYaml();
        }
    };

    $scope.moveDown = function(index) {
        if (index < $scope.animation.length - 1) {
            $scope.animation = $scope.animation.move(index, index + 1);
            $scope.updateYaml();
        }
    };

    $scope.changeInterval = function() {
        $scope.interval = $('#interval').val();
        if (timer) {
            $interval.cancel(timer);
        }
        timer = $interval(animator, (1000 / 20) * $scope.interval);
        $scope.updateYaml();
    };

    $scope.togglePause = function() {
        if (timer) {
            $scope.pause();
        } else {
            $scope.start();
        }
    };

    $scope.isRunning = function() {
        return !!timer;
    };

    $scope.updateYaml = function() {
        $scope.yaml = getYaml();
    };

    $scope.delete = function() {
        $scope.interval = 20;
        $scope.animation = [];
        $('#frameText').val("");
        $('#preview-frame').text("");
        $('#preview-animation').text("No animation");
        $('#interval').val(20);
        $scope.yaml = getYaml();
    };

    $scope.pause = function() {
        $interval.cancel(timer);
        timer = null;
    };

    $scope.start = function() {
        timer = $interval(animator, (1000 / 20) * $scope.interval);
    };

    $scope.toTrustedHTML = function(html) {
        return $sce.trustAsHtml(html);
    };

    var timer = $interval(animator, (1000 / 20) * $scope.interval);

    function animator() {
        if ($scope.index >= $scope.animation.length) {
            $scope.index = 0;
        }
        if ($scope.animation.length) {
            var frame = $scope.animation[$scope.index];
            $scope.index++;
            $('#preview-animation').html(frame.html);
        } else {
            $('#preview-animation').html("No animation");
        }
    }

    function getYaml() {
        var yaml = "<font color='yellow'>frames</font>: []<br><font color='yellow'>interval</font>: 20<br><font color='yellow'>random</font>: false";
        if ($scope.animation.length) {
            yaml = "<font color='yellow'>frames</font>:<br>";
            $scope.animation.forEach(function(frame) {
                yaml += "- <font color='red'>'" + frame.yaml + "'</font><br>";
            });
            yaml += "<font color='yellow'>interval</font>: " + $scope.interval + "<br>";
            yaml += "<font color='yellow'>random</font>: false<br>";
        }
        return yaml;
    }
}]);

Array.prototype.move = function(old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this;
};