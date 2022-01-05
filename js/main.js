import Utility from './utility.js';

import BubbleSortAnimation from './bubble_sort_animation.js';
import SelectionSortAnimation from './selection_sort_animation.js';
import SelectionSortSlowAnimation from './selection_sort_slow_animation.js';
import HeapSortAnimation from './heap_sort_animation.js';

import ArraySortPractice from './array_sort_practice.js';
import TreeSortPractice from './tree_sort_practice.js';
import BubbleSortPractice from './bubble_sort_practice.js';
import SelectionSortPractice from './selection_sort_practice.js';
import SelectionSortSlowPractice from './selection_sort_slow_practice.js';
import HeapSortPractice from './heap_sort_practice.js';

var animation, practice;

window.onload = function () {
    var algorithmName = Utility.getQuery('algorithm');
    var algorithmToTitle = {
        'array_sort': 'フリー (配列)',
        'tree_sort': 'フリー (木)',
        'bubble_sort': 'バブルソート',
        'selection_sort': '選択ソート',
        'selection_sort_slow': '選択ソート (遅)',
        'heap_sort': 'ヒープソート',
    };
    if (algorithmName !== null && algorithmName in algorithmToTitle) {
        document.getElementById('title').innerHTML = algorithmToTitle[algorithmName];
        document.getElementsByTagName('title')[0].innerHTML = algorithmToTitle[algorithmName];
    }

    if (document.getElementById('animation_canvas')) {
        var algorithm = null;
        switch (algorithmName) {
            case 'bubble_sort':
                algorithm = BubbleSortAnimation;
                break;
            case 'selection_sort':
                algorithm = SelectionSortAnimation;
                break;
            case 'selection_sort_slow':
                algorithm = SelectionSortSlowAnimation;
                break;
            case 'heap_sort':
                algorithm = HeapSortAnimation;
                break;
        }
        animation = new algorithm(document.getElementById('animation_canvas'));

        window.animationShuffle = shuffle;
        window.animationBegin = animationBegin;
        window.animationBack = animationBack;
        window.animationPlay = animationPlay;
        window.animationAdvance = animationAdvance;
        window.animationMakeAllTransparent = makeAllTransparent;
        window.animationSet = set;

        var canvas = document.getElementById('animation_canvas');
        canvas.addEventListener('mousemove', animationMouseMove, false);
        canvas.addEventListener('mouseleave', animationMouseMove, false);

        document.onkeydown = function (event) {
            if (event.key == 'ArrowLeft') {
                animationBack();
            }
            if (event.key == 'ArrowRight') {
                animationAdvance();
            }
        };
    }

    if (document.getElementById('practice_canvas')) {
        var algorithm = null;
        switch (algorithmName) {
            case 'array_sort':
                algorithm = ArraySortPractice;
                break;
            case 'tree_sort':
                algorithm = TreeSortPractice;
                break;
            case 'bubble_sort':
                algorithm = BubbleSortPractice;
                break;
            case 'selection_sort':
                algorithm = SelectionSortPractice;
                break;
            case 'selection_sort_slow':
                algorithm = SelectionSortSlowPractice;
                break;
            case 'heap_sort':
                algorithm = HeapSortPractice;
                break;
        }
        practice = new algorithm(document.getElementById('practice_canvas'));

        window.practiceShuffle = shuffle;
        window.practiceBegin = practiceBegin;
        window.practiceBack = practiceBack;
        window.practiceSet = set;

        var canvas = document.getElementById('practice_canvas');
        if ('ontouchstart' in window) {
            canvas.addEventListener('touchstart', practiceTouchDown, false);
            canvas.addEventListener('touchmove', practiceTouchMove, false);
            canvas.addEventListener('touchend', practiceTouchUp, false);
            canvas.addEventListener('touchcancel', practiceTouchUp, false);
        }
        else {
            canvas.addEventListener('mousedown', practiceMouseDown, false);
            canvas.addEventListener('mousemove', practiceMouseMove, false);
            canvas.addEventListener('mouseup', practiceMouseUp, false);
            canvas.addEventListener('mouseleave', practiceMouseUp, false);
        }
    }

    window.shuffle = shuffle;
    window.set = set;
    shuffle();
}

export function shuffle() {
    var array = Utility.generateRandomArray(10, 98, 7);

    if (animation) animation.set(array);
    if (practice) practice.set(array);
}

export function set(id) {
    var input = document.getElementById(id).value;

    const pattern = {
        'パターン1-1': [65, 83, 31, 22, 59, 46, 19],
        'パターン1-2': [92, 20, 85, 50, 37, 76, 61],
        'パターン1-3': [87, 32, 15, 28, 75, 52, 47],
        'パターン2-1': [55, 71, 12, 43, 80, 36, 93],
        'パターン2-2': [40, 22, 18, 93, 51, 67, 34],
        'パターン2-3': [43, 13, 27, 90, 88, 72, 55],
        'パターン3-1': [62, 81, 35, 22, 51, 47, 11],
        'パターン3-2': [26, 87, 57, 93, 34, 70, 68],
        'パターン3-3': [19, 21, 56, 45, 97, 82, 73],
        'パターン3-1(途中から)': [62, 81, 35, 22, 51, 47, 11],
        'パターン3-2(途中から)': [26, 87, 57, 93, 34, 70, 68],
        'パターン3-3(途中から)': [19, 21, 56, 45, 97, 82, 73],
    };
    const patternOnTheWayAnimation = {
        'パターン3-1(途中から)': 44,
        'パターン3-2(途中から)': 49,
        'パターン3-3(途中から)': 54,
    };
    const patternOnTheWayPractice = {
        'パターン3-1(途中から)': 16,
        'パターン3-2(途中から)': 19,
        'パターン3-3(途中から)': 22,
    };
    if (input in pattern) {
        if (animation) {
            animation.set(pattern[input]);
            animation.addMessage('現在の入力：' + input);
            if (input in patternOnTheWayAnimation) {
                for (var i = 0; i < patternOnTheWayAnimation[input]; i++) {
                    animation.advance();
                }
            }
        }
        if (practice) {
            practice.set(pattern[input]);
            practice.addMessage('現在の入力：' + input);
            if (input in patternOnTheWayPractice && practice.advanceInternal) {
                for (var i = 0; i < patternOnTheWayPractice[input]; i++) {
                    practice.advanceInternal();
                }
            }
        }
        document.getElementById(id).value = '';
        return;
    }

    if (input == '') {
        alert('入力を選んでから「入力セット」ボタンを押してください');
        return;
    }
    var splits = input.split(',');
    if (splits.length > 7) {
        alert('入力は 7 個までです');
        return;
    }
    var array = [];
    for (var s of splits) {
        var int = parseInt(s);
        if (isNaN(int)) {
            alert('入力のフォーマットが間違っています');
            return;
        }
        if (int > 999) {
            alert('入力された数が大きすぎます');
            return;
        }
        array.push(parseInt(s));
    }
    if (animation) {
        animation.set(array);
        animation.addMessage('現在の入力：' + input);
    }
    if (practice) {
        practice.set(array);
        practice.addMessage('現在の入力：' + input);
    }
    document.getElementById(id).value = '';
}

/* animation */

export function animationBegin() {
    animation.begin();
}

export function animationBack() {
    animation.back();
}

var timeoutID = -1;
export function animationPlay() {
    if (timeoutID == -1) {
        document.getElementById('btn_play').value = '⬛︎';
        var func = function () {
            if (animation.advance() == 1) {
                document.getElementById('btn_play').value = '▶';
                timeoutID = -1;
                return;
            }
            timeoutID = setTimeout(func, getAnimationInterval());
        };
        func();
    }
    else {
        document.getElementById('btn_play').value = '▶';
        clearTimeout(timeoutID);
        timeoutID = -1;
    }
}

export function animationAdvance() {
    animation.advance();
}

export function makeAllTransparent() {

}

function getAnimationInterval() {
    var ele = document.getElementById('animation_interval');
    return {
        '1': 3000,
        '2': 2000,
        '3': 1000,
        '4': 700,
        '5': 400,
        '6': 300,
    }[ele.value];
}

export function animationMouseMove(e) {
    var width = document.getElementById('animation_canvas').width;
    var height = document.getElementById('animation_canvas').height;
    var rect = e.target.getBoundingClientRect();
    var x = (e.clientX - rect.left) * width / (rect.right - rect.left);
    var y = (e.clientY - rect.top) * height / (rect.bottom - rect.top);
    animation.mouseMove(x, y);
}

/* practice */

export function practiceBegin() {
    practice.begin();
}

export function practiceBack() {
    practice.back();
}

export function practiceMouseDown(e) {
    var width = document.getElementById('practice_canvas').width;
    var height = document.getElementById('practice_canvas').height;
    var rect = e.target.getBoundingClientRect();
    var x = (e.clientX - rect.left) * width / (rect.right - rect.left);
    var y = (e.clientY - rect.top) * height / (rect.bottom - rect.top);

    practice.pointerDown(-1, x, y);
}

export function practiceMouseMove(e) {
    var width = document.getElementById('practice_canvas').width;
    var height = document.getElementById('practice_canvas').height;
    var rect = e.target.getBoundingClientRect();
    var x = (e.clientX - rect.left) * width / (rect.right - rect.left);
    var y = (e.clientY - rect.top) * height / (rect.bottom - rect.top);

    practice.pointerMove(-1, x, y);
}

export function practiceMouseUp(e) {
    var width = document.getElementById('practice_canvas').width;
    var height = document.getElementById('practice_canvas').height;
    var rect = e.target.getBoundingClientRect();
    var x = (e.clientX - rect.left) * width / (rect.right - rect.left);
    var y = (e.clientY - rect.top) * height / (rect.bottom - rect.top);

    practice.pointerUp(-1, x, y);
}

export function practiceTouchDown(e) {
    var width = document.getElementById('practice_canvas').width;
    var height = document.getElementById('practice_canvas').height;
    var rect = e.target.getBoundingClientRect();
    for (var t of e.targetTouches) {
        var x = (t.clientX - rect.left) * width / (rect.right - rect.left);
        var y = (t.clientY - rect.top) * height / (rect.bottom - rect.top);

        practice.pointerDown(t.identifier, x, y);
    }
}

export function practiceTouchMove(e) {
    var width = document.getElementById('practice_canvas').width;
    var height = document.getElementById('practice_canvas').height;
    var rect = e.target.getBoundingClientRect();
    for (var t of e.targetTouches) {
        var x = (t.clientX - rect.left) * width / (rect.right - rect.left);
        var y = (t.clientY - rect.top) * height / (rect.bottom - rect.top);

        practice.pointerMove(t.identifier, x, y);
    }
}

export function practiceTouchUp(e) {
    var width = document.getElementById('practice_canvas').width;
    var height = document.getElementById('practice_canvas').height;
    var rect = e.target.getBoundingClientRect();
    for (var t of e.changedTouches) {
        var x = (t.clientX - rect.left) * width / (rect.right - rect.left);
        var y = (t.clientY - rect.top) * height / (rect.bottom - rect.top);

        practice.pointerUp(t.identifier, x, y);
    }
}