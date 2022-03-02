export default class Config {
    static wordCompare = '比較';
    static wordSwap = '交換';
    static wordTime = '回';
    static wordSmall = '小';
    static wordLarge = '大';

    static algorithmToTitle = {
        'array_sort': 'フリー (配列)',
        'tree_sort': 'フリー (木)',
        'bubble_sort': 'バブルソート',
        'selection_sort': '選択ソート',
        'selection_sort_slow': '選択ソート (遅)',
        'heap_sort': 'ヒープソート',
    };

    static pattern = {
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

    static patternOnTheWay = [
        'パターン3-1(途中から)',
        'パターン3-2(途中から)',
        'パターン3-3(途中から)',
    ];
}
