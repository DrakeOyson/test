function Labels(thisObj) {
    try {
        var ColorConfig = (function () {
            var colors = { over: "#FFB31A", regular: "#378FE9" };
            var module = {};
            module.get = function (key) {
                if (!colors.hasOwnProperty(key)) {
                    throw new Error("Cannot get color by key \"" + key + "\"");
                }
                return colors[key];
            };
            return module;
        })();
        var Config = { settings: { affectLockedLayers: true, appendToSelection: true, keyAffectBoth: ["shift", "alt"], keyAffectBothEnabled: true, keyOpenEditor: ["e"], keyOpenEditorEnabled: true, keyRemove: ["alt"], keyRemoveEnabled: true, keySelect: ["shift"], keySelectEnabled: true, keySetColor: [], keySetColorEnabled: true, keyTargetKeyframes: ["cmd"], keyTargetKeyframesEnabled: true, showFilterButton: true, showTooltip: true } };
        var ImagesConfig = (function () {
            var images = { down: "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x16\x00\x00\x00\x16\x04\x03\x00\x00\x006\x9aq\b\x00\x00\x00\x15PLTE\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffH\xcfm\x04\x00\x00\x00\x07tRNS\x00\x15\x9bk\x01\x8e\r\x96\xfd\xbc<\x00\x00\x00+IDAT\x18\xd3c\xa0\x03\x10a`p\x84\xb1\x83\x1dXLal!\x13gE\x18\x9bQ\xd9H\x80\x01.\xa1\x88\xd0\xcc\x96\xc0@\x0f\x00\x00|\x97\x02\xcb\xad\xcd\xf2\xb8\x00\x00\x00\x00IEND\xaeB`\x82", plus: "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x16\x00\x00\x00\x16\x01\x03\x00\x00\x00\xfez\xfex\x00\x00\x00\x06PLTE\x00\x00\x00\xff\xff\xff\xa5\xd9\x9f\xdd\x00\x00\x00\x02tRNS\x00\x99\xff@\xe6\xd8\x00\x00\x00\x14IDAT\b\xd7c\xc0\v\x12\x10\x98\xf9\x0f\b\xa3\x88\xe1\x03\x00\xbb\x06\x04?\xff\xa8\x8f\xe8\x00\x00\x00\x00IEND\xaeB`\x82", trash: "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x16\x00\x00\x00\x16\b\x03\x00\x00\x00\xf3j\x9c\t\x00\x00\x006PLTE\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf1c\xc6\xfc\x00\x00\x00\x12tRNS\x00\xa8J~\x90 kS;\xb3\xad\xa1\x96e<\"\rB?F\xc7\xf1\x00\x00\x00LIDAT\x18\xd3\xc5\xcc9\x0e\xc0 \fDQ\x18\x9b\xc4\xec\xe4\xfe\x97M\x82h05\xe2\x17.\x9e\xe41\'\x03\x16jR\xe0=\x8a\xb4\x89\x1f\x1e\xa9\x8f|\xf5\xb2Z\xb1d\x99\xbf\xa3\xd9\x11@n\x0f\xd7\x9f\xeb\xc2)\xc4\x18\x92f\xb9{b\xce\xf5\x02\xe43\x01\xea*\xdb\x8fH\x00\x00\x00\x00IEND\xaeB`\x82", up: "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x16\x00\x00\x00\x16\x04\x03\x00\x00\x006\x9aq\b\x00\x00\x00\x15PLTE\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffH\xcfm\x04\x00\x00\x00\x07tRNS\x00\x15\x9bl\x01\x8e\r\v*\x84\x85\x00\x00\x00)IDAT\x18\xd3c\xa0\x07`K@\xb0\x85\x14\xe1LFe#\x01\xb8\xb0\x893\\\"\xd8\x81\xc5\x14\xc6\x16a`pd\xa0\x03\x00\x00g\xdf\x02\xcb\x05\x98\xc7\xe4\x00\x00\x00\x00IEND\xaeB`\x82" };
            var module = {};
            module.get = function (key) {
                if (!images.hasOwnProperty(key)) {
                    throw new Error("Cannot get image by hey \"" + key + "\"");
                }
                return images[key];
            };
            return module;
        })();
        var ScriptConfig = (function () {
            var script = { URL: "http://aescripts.com/labels", developer: "Tomas \u0160ink\u016bnas", developerURL: "www.rendertom.com", documentationURL: "https://labels.rendertom.com", name: "Labels", version: "4.0.1" };
            var module = {};
            module.get = function (key) {
                if (!script.hasOwnProperty(key)) {
                    throw new Error("Cannot get script data by key \"" + key + "\"");
                }
                return script[key];
            };
            return module;
        })();
        var ThemeConfig = (function () {
            var data = { customName: "Custom", defaultName: "Default", extension: "theme" };
            var defaultTheme = { app: { name: "Adobe After Effects", version: app.version }, assignments: { "Adjustment Label Index 2": "5", "Audio Label Index 2": "7", "Camera Label Index 2": "4", "Comp Label Index 2": "15", "Folder Label Index 2": "2", "Light Label Index 2": "6", "Null Label Index": "1", "Shape Label Index 2": "8", "Solid Label Index 2": "1", "Still Label Index 2": "5", "Text Label Index": "1", "Video Label Index 2": "3" }, designer: "Adobe Systems", labels: [{ color: "#B53838", name: "Red" }, { color: "#E4D84C", name: "Yellow" }, { color: "#A9CBC7", name: "Aqua" }, { color: "#E5BCC9", name: "Pink" }, { color: "#A9A9CA", name: "Lavender" }, { color: "#E7C19E", name: "Peach" }, { color: "#B3C7B3", name: "Sea Foam" }, { color: "#677DE0", name: "Blue" }, { color: "#4AA44C", name: "Green" }, { color: "#8E2C9A", name: "Purple" }, { color: "#E8920D", name: "Orange" }, { color: "#7F452A", name: "Brown" }, { color: "#F46DD6", name: "Fuchsia" }, { color: "#3DA2A5", name: "Cyan" }, { color: "#A89677", name: "Sandstone" }, { color: "#1E401E", name: "Dark Green" }], url: "www.adobe.com" };
            var module = {};
            module.get = function (key) {
                if (!data.hasOwnProperty(key)) {
                    throw new Error("Cannot get theme value for key \"" + key + "\"");
                }
                return data[key];
            };
            module.getDefaultTheme = function () {
                return defaultTheme;
            };
            return module;
        })();
        var UIConfig = { checkboxWidth: 120, minSpacing: 2, shortcutWidth: 93 };
        var BackButtonController = (function () {
            var module = {};
            module.onClick = function () {
                MainUI.showBackButton = false;
                MainUI.populateButtons();
            };
            return module;
        })();
        var CheckboxesController = (function () {
            var module = {};
            module.saveModified = function () {
                try {
                    var settingsChanged = false;
                    ArrayEx.forEach(SectionCheckboxes.getCheckboxes(), function (checkbox) {
                        var key = checkbox.key;
                        var value = checkbox.value;
                        if (Settinger.get(key) !== value) {
                            Settinger.set(key, value);
                            settingsChanged = true;
                        }
                    });
                    if (settingsChanged) {
                        Settinger.saveAll();
                        MainUI.needToReload = true;
                    }
                    return true;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var FilterController = (function () {
            var module = {};
            module.onClick = function () {
                try {
                    var IDs = KeyUtils.isTargetingKeyframes() ? KeyframeService.getActiveLabelsIDs() : LayerAndItemService.getActiveLabelsIDs();
                    if ((!IDs) || (IDs.length === 0)) {
                        return;
                    }
                    if (Keys.isAlt()) {
                        IDs = ArrayEx.diffArray(LabelObject.getDefaultIDs(), IDs);
                    }
                    MainUI.showBackButton = true;
                    MainUI.populateButtons(IDs);
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var FooterController = (function () {
            var module = {};
            module.openDocumentation = function () {
                Os.openURL(ScriptConfig.get("documentationURL"));
            };
            module.openPortfolio = function () {
                Os.openURL("https://aescripts.com/authors/q-r/rendertom/");
            };
            module.openSupportTicket = function () {
                Licensing.openSupportTicket({ diagnostic: Licensing.getRegistration() });
            };
            module.save = function () {
                try {
                    var checkoxesOK = CheckboxesController.saveModified();
                    var keyboardSettingsOK = KeysController.saveModified();
                    LabelObject.saveIfModified();
                    if ((checkoxesOK) && (keyboardSettingsOK)) {
                        if (MainUI.needToReload) {
                            MainUI.populateButtons();
                        }
                        return true;
                    }
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var HeaderController = (function () {
            var module = {};
            module.setColor = function (button, hexColor) {
                button.helpTip = hexColor;
                button.fillBrush = UI.getNewBrush(button, Color.hexColorToAdobeRGB(hexColor));
            };
            module.setTheme = function (theme) {
                var labels = theme.labels;
                ArrayEx.forEach(SectionHeader.getButtons(), function (button, index) {
                    button.visible = false;
                    module.setColor(button, labels[index].color);
                    button.visible = true;
                });
            };
            return module;
        })();
        var KeysController = (function () {
            function hasNoDuplicates() {
                try {
                    var seen = {};
                    var uiElements = SectionKeys.getUiElements();
                    ArrayEx.forEach(uiElements, function (element) {
                        var edittext = element.edittext.element;
                        var checkbox = element.checkbox.element;
                        var string = edittext.text;
                        var enabled = checkbox.value;
                        if ((enabled) && (seen.hasOwnProperty(string))) {
                            edittext.active = true;
                            throw "Found duplicate assignments for \"" + string + "\"\nDefinition accure in \"" + seen[string] + "\" and \"" + element.name + "\"";
                        }
                        seen[string] = element.name;
                    });
                    return true;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            }
            var module = {};
            module.saveModified = function () {
                if (!hasNoDuplicates()) {
                    return;
                }
                var settingsChanged = false;
                try {
                    var uiElements = SectionKeys.getUiElements();
                    ArrayEx.forEach(uiElements, function (element) {
                        var checkbox = element.checkbox.element;
                        var checkboxSettings = element.checkbox.settings;
                        var edittext = element.edittext.element;
                        var edittextSettings = element.edittext.settings;
                        if (Settinger.get(checkboxSettings) !== checkbox.value) {
                            Settinger.set(checkboxSettings, checkbox.value);
                            settingsChanged = true;
                        }
                        if (checkbox.value) {
                            var keys = Keys.signsToNames(Keys.stringToKeys(edittext.text.toLowerCase()));
                            if (!ArrayEx.sameContext(keys, Settinger.get(edittextSettings))) {
                                Settinger.set(edittextSettings, keys);
                                settingsChanged = true;
                            }
                        }
                    });
                    if (settingsChanged) {
                        Settinger.saveAll();
                        MainUI.needToReload = true;
                    }
                    return true;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var ResetController = (function () {
            var module = {};
            module.onClick = function () {
                try {
                    var utils = KeyUtils.init();
                    if (!utils) {
                        return;
                    }
                    var propagate = KeyUtils.isTargetingThis("keyAffectBothEnabled", "keyAffectBoth", utils.keys);
                    Ae.forUndoGroup("Reset colors", function () {
                        utils.targetKeyframes ? KeyframeService.resetLabelColor(propagate) : LayerAndItemService.resetLabelColor(propagate);
                    });
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var SettingsController = (function () {
            var module = {};
            module.onClick = function () {
                if ((Keys.isAlt()) && (Keys.isCmd())) {
                    var file = Prefs.getFile("PREF_Type_MACHINE_INDEPENDENT");
                    (file) && (Os.revealInFinder(file));
                }
                else if (Keys.isAlt()) {
                    app.executeCommand(2365);
                }
                else if (Keys.isShift()) {
                    CustomScriptsUI.show();
                }
                else if (Keys.isCmd()) {
                    LabelObject.init();
                    MainUI.populateButtons();
                }
                else {
                    SettingsUI.show();
                }
            };
            return module;
        })();
        var SwatchController = (function () {
            function launchScript(scriptFile, button) {
                scriptFile = FileEx.getFileObject(scriptFile);
                if (!scriptFile.exists) {
                    return alert("Script at path \"" + scriptFile.fsName + "\" does not exist.");
                }
                var Labels = { hex: button.hexColor, index: button.index, name: button.name, rgb: Color.hexColorToRgb(button.hexColor) };
                try {
                    Folder.current = scriptFile.parent;
                    $.evalFile(scriptFile.absoluteURI);
                } catch (error) {
                    ErrorHandler.show(error);
                }
            }
            var module = {};
            module.onClick = function () {
                eval("@JSXBIN@ES@2.1@MyBbyBn0ADJAnASzGjCjVjUjUjPjOByBezEjUjIjJjTCfnftJBnASzHjDjPjMjPjSiJjEDyBXzFjJjOjEjFjYEfVBfyBnftODbEn0ACJEnAPXzFjWjBjMjVjFFfXzHjDjPjVjOjUjFjSGfjzJiMjJjDjFjOjTjJjOjHHfBtOGbHn0ACJHnAEXzLjTjIjPjXiNjFjTjTjBjHjFIfXGfjHfnfJInASDyBnbffAEXzMjFjYjDjFjFjEjTiMjJjNjJjUJfXGfjHfnfnAEXzHjJjTiUjSjJjBjMKfjHfnfnACB40BiAD4B0AiAACAzALByB");
                var utils = KeyUtils.init();
                if (!utils) {
                    return;
                }
                var targetKeyframes = utils.targetKeyframes;
                var keys = utils.keys;
                switch (true) {
                    case KeyUtils.isTargetingThis("keySetColorEnabled", "keySetColor", keys):
                        Ae.forUndoGroup("Set label color", function () {
                            targetKeyframes ? KeyframeService.setLabelColor(colorId) : LayerAndItemService.setLabelColor(colorId);
                        });
                        break;
                    case KeyUtils.isTargetingThis("keyAffectBothEnabled", "keyAffectBoth", keys):
                        Ae.forUndoGroup("Set label color", function () {
                            targetKeyframes ? KeyframeService.setLabelColor(colorId, true) : LayerAndItemService.setLabelColor(colorId, true);
                        });
                        break;
                    case KeyUtils.isTargetingThis("keySelectEnabled", "keySelect", keys):
                        Ae.forUndoGroup("Select label group", function () {
                            var append = Settinger.get("appendToSelection");
                            if (targetKeyframes) {
                                if (Ae.getActiveCompositionWithAlert()) {
                                    (!append) && (KeyframeService.deselect());
                                    KeyframeService.select(colorId);
                                }
                            }
                            else {
                                (!append) && (LayerAndItemService.deselect());
                                LayerAndItemService.select(colorId);
                            }
                        });
                        break;
                    case KeyUtils.isTargetingThis("keyRemoveEnabled", "keyRemove", keys):
                        Ae.forUndoGroup("Remove from selection", function () {
                            targetKeyframes ? KeyframeService.removeFromSelection(colorId) : LayerAndItemService.removeFromSelection(colorId);
                        });
                        break;
                    case KeyUtils.isTargetingThis("keyOpenEditorEnabled", "keyOpenEditor", keys):
                        if (colorId > 0) {
                            SwatchChangerUI.show(colorId - 1);
                        }
                        break;
                }
                ArrayEx.forEach(CustomScriptsUI.get(), function (script) {
                    if ((script.enabled) && (ArrayEx.sameContext(keys, script.shortcut))) {
                        launchScript(script.path, button);
                    }
                });
            };
            return module;
        })();
        var SwatchChangerController = (function () {
            var module = {};
            module.modify = function (index, color, name) {
                try {
                    var theme = JSON.parse(JSON.stringify(LabelObject.getThemeOnLoad()));
                    var label = theme.labels[index];
                    if ((label.color !== color) || (label.name !== name)) {
                        label.color = color;
                        label.name = name;
                        LabelObject.setSelectedTheme(theme);
                        return LabelObject.saveIfModified();
                    }
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var ThemeController = (function () {
            function validateAndGetFile(name) {
                if (!ThemeCacher.haveTheme(name)) {
                    throw new Error("Theme \"" + name + "\" is not in cache.");
                }
                var theme = ThemeCacher.getTheme(name);
                if (!theme.hasOwnProperty("file")) {
                    throw new Error("Theme " + name + "\" does not have path property defined.");
                }
                var file = FileEx.getFileObject(theme.file);
                if (!file.exists) {
                    throw new Error("Theme \"" + name + "\" does not exist in path \"" + file.fsName + "\"");
                }
                return file;
            }
            var module = {};
            module.deleteTheme = function (name) {
                try {
                    var file = validateAndGetFile(name);
                    FileEx.remove(file);
                    return file;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            module.exportTheme = function (name) {
                try {
                    var file = validateAndGetFile(name);
                    var newName = name + "." + ThemeConfig.get("extension");
                    var newFile = new File(newName).saveDlg("Export Theme");
                    if (!newFile) {
                        return;
                    }
                    FileEx.copy(file, newFile);
                    return newFile;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            module.getThemeFolder = function () {
                return FolderEx.ensureFolderExists(Utils.getUserDataFolder().fsName + "/Themes");
            };
            module.importTheme = function () {
                try {
                    var extension = ThemeConfig.get("extension");
                    var file = FileEx.selectFiles([extension, extension + ".txt"]);
                    if (!file) {
                        return;
                    }
                    var nameWithExtension = File.decode(file.name);
                    var pattern = new RegExp("." + extension + "(.txt)?$", "i");
                    if (!pattern.test(nameWithExtension)) {
                        return alert("Please select theme file with extension \"" + extension + "\"");
                    }
                    var name = nameWithExtension.replace(pattern, "");
                    if (ThemeCacher.haveTheme(name)) {
                        return alert("Theme \"" + name + "\" is already installed.");
                    }
                    var path = module.getThemeFolder().fsName + "/" + name + "." + extension;
                    var newFile = FileEx.getFileObject(path);
                    FileEx.copy(file, newFile);
                    return newFile;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            module.saveTheme = function () {
                try {
                    var params = { canSave: false, labels: LabelObject.getThemeOnLoad().labels, themeExtension: ThemeConfig.get("extension"), themeFolder: module.getThemeFolder().fsName };
                    ThemeSaverUI.show(params);
                    if (!params.canSave) {
                        return;
                    }
                    var theme = LabelObject.buildTheme(params.designer, params.url);
                    var file = FileEx.getFileObject(params.filePath);
                    FileEx.write(file, JSON.stringify(theme, false, 4));
                    return file;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            return module;
        })();
        var Licensing = (function () {
            eval("@JSXBIN@ES@2.1@MyBbyBn0ABJAnABjzIjTjFjUjUjJjOjHjTBfWzGiPjCjKjFjDjUCHzKjTjDjSjJjQjUiOjBjNjFDEXzDjHjFjUEfjzMiTjDjSjJjQjUiDjPjOjGjJjHFfRBFeEjOjBjNjFffzNjTjDjSjJjQjUiWjFjSjTjJjPjOGEXEfjFfRBFeHjWjFjSjTjJjPjOffzMjTjDjSjJjQjUiBjVjUjIjPjSHEXEfjFfRBFeJjEjFjWjFjMjPjQjFjSffzJjTjDjSjJjQjUiViSiMIEXEfjFfRBFeDiViSiMffzNjQjSjJjWjBjUjFiOjVjNjCjFjSJFd4FEnbDzKjQjSjPjEjVjDjUiTiLiVKFeJiSiUiNiMhUhNiTiViMzKjPjGjGjFjSiUjSjJjBjMLFctnf0DzAMByB");
            module = new b(settings);
            module.gatekeeperPass = module.c;
            module.removeLicense = module.r;
            module.silentLicenseCheck = module.s;
            module.isTrial = module.t;
            module.trial = {
                limit: 20, showMessage: function () {
                    var message = ScriptConfig.get("name") + " is running in trial mode.\n" + "All script features are available in Trial version except that you can click only " + this.limit + " times on color swatches. " + "After that you will need to restart the script." + "\n\nTo remove this restriction, please purchase full version of the script on " + ScriptConfig.get("URL") + "\n\nWould you like to go there now?";
                    if (confirm(message)) {
                        module.openURL(ScriptConfig.get("URL"));
                    }
                }
            };
            module.counter = {
                exceedsLimit: function () {
                    return this.value > module.trial.limit;
                }, showMessage: function () {
                    var message = ScriptConfig.get("name") + " trial limit exceeded.\n" + "Please restart the script or better yet, please purchase full version of the script on " + ScriptConfig.get("URL") + "\n\nWould you like to go there now?";
                    if (confirm(message)) {
                        module.openURL(ScriptConfig.get("URL"));
                    }
                }, value: 0
            };
            return module;
        })();
        var Keys = (function () {
            function getKeys() {
                var keys = [];
                (module.isShift()) && (keys.push("shift"));
                (module.isCmd()) && (keys.push("cmd"));
                (module.isAlt()) && (keys.push("alt"));
                (getState().keyName) && (keys.push(getState().keyName.toLowerCase()));
                return keys;
            }
            function getState() {
                return ScriptUI.environment.keyboardState;
            }
            var separator = "+";
            var keyMap = { ",": "comma", "-": "minus", ".": "period", "/": "slash", ";": "semicolon", "=": "equal", "[": "leftbracket", "\\": "backslash", "]": "rightbracket", "`": "apostrophe" };
            var module = {};
            module.get = function () {
                return getKeys();
            };
            module.isAlt = function () {
                return getState().altKey;
            };
            module.isCmd = function () {
                return (module.isCtrl()) || (module.isMeta());
            };
            module.isCtrl = function () {
                return getState().ctrlKey;
            };
            module.isMeta = function () {
                return getState().metaKey;
            };
            module.isShift = function () {
                return getState().shiftKey;
            };
            module.keysToString = function (array) {
                return array.join(" " + separator + " ");
            };
            module.namesToSigns = function (names) {
                return ArrayEx.map(names, function (name) {
                    return module.nameToSign(name);
                });
            };
            module.nameToSign = function (value) {
                return (ObjectEx.findKeyByValue(keyMap, value)) || (value);
            };
            module.signsToNames = function (signs) {
                return ArrayEx.map(signs, function (sign) {
                    return module.signToKey(sign);
                });
            };
            module.signToKey = function (key) {
                return keyMap.hasOwnProperty(key) ? keyMap[key] : key;
            };
            module.stringToKeys = function (string) {
                var array = [];
                string = string.replace(/ /g, "");
                if (string !== "") {
                    array = string.split(separator);
                }
                return array;
            };
            return module;
        })();
        var LabelObject = (function () {
            function formatInitialTheme() {
                return {
                    assignments: assignments, labels: ArrayEx.map(colors, function (item, index) {
                        return { color: colors[index], name: names[index] };
                    })
                };
            }
            function themesAreDifferent() {
                var onLoadLabels = JSON.stringify(themeOnLoad.labels);
                var onLoadAssignments = JSON.stringify(themeOnLoad.assignments);
                var selectedLabels = JSON.stringify(selectedTheme.labels);
                var selectedAssignments = JSON.stringify(selectedTheme.assignments);
                return (onLoadLabels !== selectedLabels) || (onLoadAssignments !== selectedAssignments);
            }
            var LabelAssignments = (function () {
                function getPrefAsString(key) {
                    return app.preferences.getPrefAsString(section, key, prefType);
                }
                function getSection() {
                    return "Label Preference Indices Section " + getSectionIndex();
                }
                function getSectionIndex() {
                    return parseFloat(app.version) > 8 ? "5" : "3";
                }
                function havePref(key) {
                    return app.preferences.havePref(section, key, prefType);
                }
                function savePrefAsString(key, value) {
                    app.preferences.savePrefAsString(section, key, value, prefType);
                }
                var defaultAssignments = { "Adjustment Label Index 2": 5, "Audio Label Index 2": 7, "Camera Label Index 2": 4, "Comp Label Index 2": 15, "Folder Label Index 2": 2, "Light Label Index 2": 6, "Null Label Index": 1, "Shape Label Index 2": 8, "Solid Label Index 2": 1, "Still Label Index 2": 5, "Text Label Index": 1, "Video Label Index 2": 3 };
                var prefType = PREFType.PREF_Type_MACHINE_INDEPENDENT;
                var section = getSection();
                var module = {};
                module.get = function () {
                    var assignments = {};
                    ObjectEx.forOwn(defaultAssignments, function (value, key) {
                        assignments[key] = value;
                        if (havePref(key)) {
                            assignments[key] = getPrefAsString(key);
                        }
                    });
                    return assignments;
                };
                module.getDefaultItemLabel = function (item) {
                    var assignments = LabelObject.getThemeOnLoad().assignments;
                    if (item instanceof CompItem) {
                        return assignments["Comp Label Index 2"];
                    }
                    else if (item instanceof FolderItem) {
                        return assignments["Folder Label Index 2"];
                    }
                    else if (item.mainSource) {
                        if (item.mainSource instanceof SolidSource) {
                            return assignments["Solid Label Index 2"];
                        }
                        if (item.mainSource instanceof PlaceholderSource) {
                            return assignments["Video Label Index 2"];
                        }
                        if (item.mainSource instanceof FileSource) {
                            if (item.hasVideo) {
                                return assignments["Video Label Index 2"];
                            }
                            if (item.hasAudio) {
                                return assignments["Audio Label Index 2"];
                            }
                            if (item.mainSource.isStill) {
                                return assignments["Still Label Index 2"];
                            }
                        }
                    }
                    else {
                        return "0";
                    }
                };
                module.getDefaultLayerLabel = function (layer) {
                    try {
                        var assignments = LabelObject.getThemeOnLoad().assignments;
                        if (layer instanceof CameraLayer) {
                            return assignments["Camera Label Index 2"];
                        }
                        if (layer instanceof ShapeLayer) {
                            return assignments["Shape Label Index 2"];
                        }
                        if (layer instanceof TextLayer) {
                            return assignments["Text Label Index"];
                        }
                        if (layer instanceof LightLayer) {
                            return assignments["Light Label Index 2"];
                        }
                        if (layer instanceof AVLayer) {
                            if (layer.source instanceof CompItem) {
                                return assignments["Comp Label Index 2"];
                            }
                            else if (layer.hasAudio) {
                                if (layer.hasVideo) {
                                    return assignments["Video Label Index 2"];
                                }
                                else {
                                    return assignments["Audio Label Index 2"];
                                }
                            }
                            else if (layer.source.mainSource instanceof SolidSource) {
                                if (layer.nullLayer) {
                                    return assignments["Null Label Index"];
                                }
                                else if (layer.adjustmentLayer) {
                                    return assignments["Adjustment Label Index 2"];
                                }
                                else {
                                    return assignments["Solid Label Index 2"];
                                }
                            }
                            else {
                                return assignments["Still Label Index 2"];
                            }
                        }
                        return "0";
                    } catch (error) {
                        ErrorHandler.show(error);
                    }
                };
                module.set = function (assignments) {
                    ObjectEx.forOwn(assignments, function (value, key) {
                        savePrefAsString(key, value);
                    });
                    app.preferences.saveToDisk();
                    app.preferences.reload();
                };
                return module;
            })();
            var LabelColors = (function () {
                function getColorSection() {
                    return "Label Preference Color Section " + getSectionIndex();
                }
                function getSectionIndex() {
                    return parseFloat(app.version) > 8 ? "5" : "3";
                }
                function savePrefAsString(color, index) {
                    app.preferences.savePrefAsString(getColorSection(), "Label Color ID 2 # " + index, color, PREFType.PREF_Type_MACHINE_INDEPENDENT);
                }
                var defaultAsciiArray = ["FFB5\"88\"", "FFE4D8\"L\"", "FFA9CBC7", "FFE5BCC9", "FFA9A9CA", "FFE7C19E", "FFB3C7B3", "FF\"g}\"E0", "FF\"J\"A4\"L\"", "FF8E\",\"9A", "FFE8920D", "FF7F\"E*\"", "FFF4\"m\"D6", "FF\"=\"A2A5", "FFA896\"w\"", "FF1E\"@\"1E"];
                var defaultHexArray = ["B53838", "E4D84C", "A9CBC7", "E5BCC9", "A9A9CA", "E7C19E", "B3C7B3", "677DE0", "4AA44C", "8E2C9A", "E8920D", "7F452A", "F46DD6", "3DA2A5", "A89677", "1E401E"];
                var module = {};
                module.get = function () {
                    var colors = { ascii: module.getDefaultAsciiArray(), hex: module.getDefaultHexArray() };
                    try {
                        var json = Prefs.getJson("PREF_Type_MACHINE_INDEPENDENT");
                        var colorsJson = json[getColorSection()];
                        var keys = ObjectEx.keys(colorsJson).sort(Sort.alphaNum);
                        colors.ascii = ArrayEx.map(keys, function (key) {
                            return colorsJson[key];
                        });
                        colors.hex = ArrayEx.map(colors.ascii, function (color) {
                            return Color.aeLabelColorToHexColor(color).toUpperCase();
                        });
                    } catch (error) {
                        ErrorHandler.show(error);
                    } finally {
                        return colors;
                    }
                };
                module.getDefaultAsciiArray = function () {
                    return defaultAsciiArray;
                };
                module.getDefaultHexArray = function () {
                    return defaultHexArray;
                };
                module.set = function (colors) {
                    AppEncoding.set("CP1252");
                    ArrayEx.forEach(colors, function (color, index) {
                        savePrefAsString(Color.hexColorToAsciiColor(color), index + 1);
                    });
                    app.preferences.saveToDisk();
                    app.preferences.reload();
                    AppEncoding.restore();
                };
                return module;
            })();
            var LabelNames = (function () {
                function getPrefAsString(key) {
                    return app.preferences.getPrefAsString(section, key, prefType);
                }
                function getSection() {
                    return "Label Preference Text Section " + getSectionIndex();
                }
                function getSectionIndex() {
                    var appVersion = parseFloat(app.version);
                    if (appVersion >= 15) {
                        return "7";
                    }
                    else if (appVersion > 8) {
                        return "5";
                    }
                    else {
                        return "3";
                    }
                }
                function havePref(key) {
                    return app.preferences.havePref(section, key, prefType);
                }
                function savePrefAsString(key, string) {
                    app.preferences.savePrefAsString(section, key, string, prefType);
                }
                var defaultNames = { "Label Text ID 2 # 1": "Red", "Label Text ID 2 # 10": "Purple", "Label Text ID 2 # 11": "Orange", "Label Text ID 2 # 12": "Brown", "Label Text ID 2 # 13": "Fuchsia", "Label Text ID 2 # 14": "Cyan", "Label Text ID 2 # 15": "Sandstone", "Label Text ID 2 # 16": "Dark Green", "Label Text ID 2 # 2": "Yellow", "Label Text ID 2 # 3": "Aqua", "Label Text ID 2 # 4": "Pink", "Label Text ID 2 # 5": "Lavender", "Label Text ID 2 # 6": "Peach", "Label Text ID 2 # 7": "Sea Foam", "Label Text ID 2 # 8": "Blue", "Label Text ID 2 # 9": "Green" };
                var prefType = PREFType.PREF_Type_MACHINE_INDEPENDENT;
                var section = getSection();
                var module = {};
                module.get = function () {
                    AppEncoding.set("UTF-8");
                    var names = [];
                    ObjectEx.forOwn(defaultNames, function (value, key) {
                        names.push(havePref(key) ? getPrefAsString(key) : value);
                    });
                    AppEncoding.restore();
                    return names;
                };
                module.set = function (names) {
                    AppEncoding.set("UTF-8");
                    var key = "Label Text ID 2 # ";
                    ArrayEx.forEach(names, function (item, index) {
                        savePrefAsString(key + index + 1, item);
                    });
                    app.preferences.saveToDisk();
                    app.preferences.reload();
                    AppEncoding.restore();
                };
                return module;
            })();
            var assignments = undefined;
            var colors = undefined;
            var names = undefined;
            var selectedTheme = undefined;
            var themeOnLoad = undefined;
            var module = {};
            module.init = function () {
                assignments = LabelAssignments.get();
                colors = LabelColors.get().hex;
                names = LabelNames.get();
                themeOnLoad = JSON.parse(JSON.stringify(formatInitialTheme()));
            };
            module.buildTheme = function (designer, url) {
                return { app: { name: "Adobe After Effects", version: app.version }, assignments: themeOnLoad.assignments, designer: (designer) || (""), labels: themeOnLoad.labels, url: (url) || ("") };
            };
            module.getDefaultItemLabel = function (item) {
                return parseInt(LabelAssignments.getDefaultItemLabel(item));
            };
            module.getDefaultLayerLabel = function (layer) {
                return parseInt(LabelAssignments.getDefaultLayerLabel(layer));
            };
            module.getSelectedTheme = function () {
                return selectedTheme;
            };
            module.getThemeOnLoad = function () {
                return themeOnLoad;
            };
            module.getDefaultIDs = function () {
                return ArrayEx.generate(0, themeOnLoad.labels.length + 1);
            };
            module.save = function () {
                try {
                    if (selectedTheme.labels) {
                        var names = [];
                        var colors = [];
                        ArrayEx.forEach(selectedTheme.labels, function (item) {
                            names.push(item.name);
                            colors.push(item.color);
                        });
                        LabelNames.set(names);
                        LabelColors.set(colors);
                        needToReload = true;
                    }
                    if (selectedTheme.assignments) {
                        LabelAssignments.set(selectedTheme.assignments);
                        needToReload = true;
                    }
                    if (needToReload) {
                        module.update();
                        MainUI.needToReload = needToReload;
                    }
                    return needToReload;
                } catch (error) {
                    ErrorHandler.show(error);
                }
            };
            module.saveIfModified = function () {
                if ((!selectedTheme) || (!themeOnLoad)) {
                    return;
                }
                if (!themesAreDifferent()) {
                    return;
                }
                return module.save();
            };
            module.setSelectedTheme = function (theme) {
                selectedTheme = theme;
            };
            module.update = function () {
                module.init();
            };
            return module;
        })();
        var Settinger = (function () {
            function convertToType(returnedValue, defaultValue) {
                switch (true) {
                    case Types.isArray(defaultValue):
                        if (returnedValue === "") {
                            return [];
                        }
                        return ArrayEx.map(returnedValue.split(","), function (item, index) {
                            return convertToType(item, defaultValue[index]);
                        });
                    case Types.isBoolean(defaultValue):
                        return returnedValue === "true";
                    case Types.isNumber(defaultValue):
                        return Number(returnedValue);
                    default:
                        return returnedValue;
                }
            }
            function getSetting(key) {
                return app.settings.getSetting(scriptName, key);
            }
            function haveSetting(key) {
                return app.settings.haveSetting(scriptName, key);
            }
            function loadSettings() {
                var needToSaveSettings = false;
                ObjectEx.forOwn(localSettings, function (value, key) {
                    if (haveSetting(key)) {
                        var appValue = getSetting(key);
                        appValue = convertToType(appValue, value);
                        setSetting(key, appValue);
                    }
                    else {
                        saveSetting(key, value);
                        needToSaveSettings = true;
                    }
                });
                if (needToSaveSettings) {
                    saveToDisk();
                }
            }
            function saveSetting(key, value) {
                app.settings.saveSetting(scriptName, key, value.toString());
            }
            function saveToDisk() {
                app.preferences.saveToDisk();
            }
            function setSetting(key, value) {
                localSettings[key] = value;
            }
            var module = {};
            module.init = function (_defaults, name) {
                defaults = _defaults;
                scriptName = (name) || ("UNDEFINED_SCRIPT_NAME");
                localSettings = JSON.parse(JSON.stringify(defaults));
                loadSettings();
            };
            module.get = function (key) {
                if (!localSettings.hasOwnProperty(key)) {
                    throw "Key \"" + key + "\" is not defined in settings";
                }
                return localSettings[key];
            };
            module.getDefault = function (key) {
                if (!defaults.hasOwnProperty(key)) {
                    throw "Default key \"" + key + "\" is not defined in settings";
                }
                return defaults[key];
            };
            module.saveAll = function () {
                ObjectEx.forOwn(localSettings, function (value, key) {
                    saveSetting(key, value);
                });
                saveToDisk();
            };
            module.set = function (key, value) {
                localSettings[key] = value;
            };
            module.setAndSave = function (key, value) {
                module.set(key, value);
                saveSetting(key, value);
            };
            return module;
        })();
        var ThemeCacher = (function () {
            function cacheDefaultTheme() {
                var file = getDefaultThemeFile();
                if (!file.exists) {
                    installDefaultTheme();
                }
                var name = ThemeConfig.get("defaultName");
                cacheTheme(name, file);
                cache[name].isDefault = true;
            }
            function cacheTheme(name, file) {
                cache[name] = JSON.parse(FileEx.readFile(file));
                cache[name].file = FileEx.getFileObject(file).fsName;
            }
            function cacheThemeFiles() {
                var extension = ThemeConfig.get("extension");
                var regex = new RegExp("\\." + extension, "i");
                var files = FolderEx.getFiles2(ThemeController.getThemeFolder(), regex);
                ArrayEx.forEach(files, function (file) {
                    if (StringEx.equalsInsensitive(FileEx.getExtension(file), extension)) {
                        var name = FileEx.getBaseName(file);
                        if (!StringEx.equalsInsensitive(name, ThemeConfig.get("defaultName"))) {
                            cacheTheme(name, file);
                        }
                    }
                });
            }
            function compareThemesByKey(a, b, key) {
                return formatText(a[key]).toLowerCase() === formatText(b[key]).toLowerCase();
            }
            function emptyCache() {
                cache = {};
            }
            function formatText(object) {
                return JSON.stringify(object, false, 4);
            }
            function getAeThemeNameFromCache() {
                var theme = LabelObject.getThemeOnLoad();
                return ObjectEx.findKey(cache, function (value) {
                    return (compareThemesByKey(theme, value, "labels")) && (compareThemesByKey(theme, value, "assignments"));
                });
            }
            function getDefaultThemeFile() {
                return FileEx.getFileObject(ThemeController.getThemeFolder().fsName + "/" + ThemeConfig.get("defaultName") + "." + ThemeConfig.get("extension"));
            }
            function installDefaultTheme() {
                var defaultThemeFile = getDefaultThemeFile();
                if (!defaultThemeFile.exists) {
                    FileEx.write(defaultThemeFile, formatText(ThemeConfig.getDefaultTheme()));
                }
            }
            var cache = {};
            var aeThemeName = undefined;
            var themeNames = undefined;
            var module = {};
            module.init = function () {
                emptyCache();
                cacheDefaultTheme();
                cacheThemeFiles();
                themeNames = ObjectEx.keys(cache);
                aeThemeName = getAeThemeNameFromCache();
                if (!aeThemeName) {
                    aeThemeName = ThemeConfig.get("customName");
                    cache[aeThemeName] = LabelObject.getThemeOnLoad();
                    cache[aeThemeName].isCustom = true;
                    themeNames.unshift(aeThemeName);
                }
            };
            module.getAeThemeName = function () {
                return aeThemeName;
            };
            module.getTheme = function (themeName) {
                return cache[themeName];
            };
            module.getThemeNames = function () {
                return themeNames;
            };
            module.haveTheme = function (themeName) {
                return cache.hasOwnProperty(themeName);
            };
            return module;
        })();
        var Ae = (function () {
            var module = {};
            module.canHaveKeyframes = function (property) {
                return property.canVaryOverTime;
            };
            module.forEachItem = function (baseFolder, callback) {
                for (var i = 1, il = baseFolder.numItems; i <= il; i++) {
                    callback(baseFolder.item(i), i);
                }
            };
            module.forEachKeyframe = function (property, callback) {
                for (var i = 1, il = property.numKeys; i <= il; i++) {
                    callback(i);
                }
            };
            module.forEachLayer = function (composition, callback) {
                for (var i = 1, il = composition.numLayers; i <= il; i++) {
                    callback(composition.layer(i), i);
                }
            };
            module.forEachProperty = function (baseProperty, callback) {
                for (var i = 1, il = baseProperty.numProperties; i <= il; i++) {
                    callback(baseProperty.property(i), i);
                }
            };
            module.forEachPropertyRecursively = function (baseProperty, callback) {
                module.forEachProperty(baseProperty, function (property) {
                    if (property.numProperties) {
                        module.forEachPropertyRecursively(property, callback);
                    }
                    callback(property);
                });
            };
            module.forEachSelectedLayer = function (composition, callback) {
                ArrayEx.forEach(composition.selectedLayers, function (layer) {
                    callback(layer);
                });
            };
            module.forUndoGroup = function (undoGroupName, callback) {
                app.beginUndoGroup(undoGroupName);
                var result = callback();
                app.endUndoGroup();
                return result;
            };
            module.getActiveComposition = function () {
                var composition = app.project.activeItem;
                if ((composition) && (composition instanceof CompItem)) {
                    return composition;
                }
            };
            module.getActiveCompositionWithAlert = function () {
                var composition = module.getActiveComposition();
                if (!composition) {
                    return alert("Please select a composition");
                }
                return composition;
            };
            module.getAllOrSelectedLayers = function (composition) {
                var layers = module.getSelectedLayers(composition);
                if (layers.length === 0) {
                    module.forEachLayer(composition, function (layer) {
                        layers.push(layer);
                    });
                }
                return layers;
            };
            module.getLayerFromProperty = function (property) {
                while (property.parentProperty) {
                    property = property.parentProperty;
                }
                return property;
            };
            module.getSelectedLayers = function (composition) {
                return composition.selectedLayers;
            };
            module.hasSelectedLayers = function (composition) {
                return module.getSelectedLayers(composition).length > 0;
            };
            module.invertKeyframeSelectedByLabel = function (property, label) {
                module.forEachKeyframe(property, function (keyIndex) {
                    property.setSelectedAtKey(keyIndex, property.keyLabel(keyIndex) !== label);
                });
            };
            module.setKeyframeSelectedByLabel = function (property, label, value) {
                module.forEachKeyframe(property, function (keyIndex) {
                    if (property.keyLabel(keyIndex) === label) {
                        property.setSelectedAtKey(keyIndex, value);
                    }
                });
            };
            module.supportsKeyframeLabels = function () {
                return parseFloat(app.version) >= 22.6;
            };
            return module;
        })();
        var AppEncoding = (function () {
            var module = {};
            module.restore = function () {
                $.appEncoding = appEncoding;
            };
            module.set = function (encoding) {
                appEncoding = $.appEncoding;
                $.appEncoding = encoding;
            };
            return module;
        })();
        var ArrayEx = (function () {
            var module = {};
            module.changeIndex = function (array, indexOld, indexNew) {
                var arrayLength = array.length;
                if (indexNew >= arrayLength) {
                    var k = (indexNew - arrayLength) + 1;
                    while (k--) {
                        array.push(undefined);
                    }
                }
                array.splice(indexNew, 0, array.splice(indexOld, 1)[0]);
                return array;
            };
            module.clone = function (array) {
                var newArray = array.slice(0);
                return newArray;
            };
            module.createArray = function (arrayLength) {
                var array = [];
                for (var i = 0; i < arrayLength; i++) {
                    array.push(i);
                }
                return array;
            };
            module.diffArray = function (array1, array2) {
                var seen = [];
                var diff = [];
                for (i = 0, il = array2.length; i < il; i++) {
                    seen[array2[i]] = true;
                }
                for (i = 0, il = array1.length; i < il; i++) {
                    if (!seen[array1[i]]) {
                        diff.push(array1[i]);
                    }
                }
                return diff;
            };
            module.ensureIsArray = function (array) {
                if (!module.isArray(array)) {
                    array = [array];
                }
                return array;
            };
            module.every = function (array, callback) {
                for (var i = 0, il = array.length; i < il; i++) {
                    if (!callback(array[i], i, array)) {
                        return false;
                    }
                }
                return true;
            };
            module.filter = function (array, callback) {
                var filteredArray = [];
                var index = 0;
                module.forEach(array, function (element, i, array) {
                    if (callback(element, i, array)) {
                        filteredArray[index++] = element;
                    }
                });
                return filteredArray;
            };
            module.forEach = function (array, callback) {
                for (var i = 0, il = array.length; i < il; i++) {
                    callback(array[i], i, array);
                }
            };
            module.generate = function (startValue, endValue) {
                var array = [];
                var index = 0;
                for (var i = startValue; i < endValue; i++) {
                    array[index++] = i;
                }
                return array;
            };
            module.includes = function (array, element) {
                return module.indexOf(array, element) >= 0;
            };
            module.indexOf = function (array, element) {
                for (var i = 0, il = array.length; i < il; i++) {
                    if (array[i] === element) {
                        return i;
                    }
                }
                return -1;
            };
            module.isArray = function (array) {
                return Object.prototype.toString.call(array) === "[object Array]";
            };
            module.map = function (array, callback) {
                var mappedArray = [];
                module.forEach(array, function (item, i, array) {
                    mappedArray[i] = callback(item, i, array);
                });
                return mappedArray;
            };
            module.removeElement = function (array, element) {
                var index = module.indexOf(array, element);
                if (index > -1) {
                    array.splice(index, 1);
                }
            };
            module.sameContext = function (array1, array2) {
                var length1 = array1.length;
                var length2 = array2.length;
                if (length1 !== length2) {
                    return false;
                }
                for (var i = 0; i < length1; i++) {
                    if ((module.isArray(array1[i])) && (module.isArray(array2[i]))) {
                        if (!module.sameContext(array1[i], array2[i])) {
                            return false;
                        }
                    }
                    else {
                        if ((module.indexOf(array1, array2[i]) === -1) || (module.indexOf(array2, array1[i]) === -1)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            module.sort = function (array) {
                return array.sort(function (a, b) {
                    return a - b;
                });
            };
            module.sortAlpha = function (array) {
                return array.sort(function (a, b) {
                    if (a.toLowerCase() < b.toLowerCase()) {
                        return -1;
                    }
                    if (a.toLowerCase() > b.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                });
            };
            module.swap = function (array, indexA, indexB) {
                var temp = array[indexA];
                array[indexA] = array[indexB];
                array[indexB] = temp;
            };
            module.uniqFast = function (array, property) {
                keeper = {};
                uniqArray = module.filter(array, function (item) {
                    if (typeof property !== "undefined") {
                        item = item[property];
                    }
                    if (!keeper.hasOwnProperty(item)) {
                        keeper[item] = 1;
                        return item;
                    }
                });
                return uniqArray;
            };
            return module;
        })();
        var Color = (function () {
            function componentToHex(component) {
                var hex = module.decimalToHex(component);
                return hex.length === 1 ? "0" + hex : hex;
            }
            function isPrintableCharacter(hex) {
                var decimal = module.hexToDecimal(hex);
                return (decimal >= 32) && (decimal <= 126);
            }
            var module = {};
            module.aeLabelColorToHexColor = function (aeLabelColor) {
                aeLabelColor = aeLabelColor.replace(/^FF/, "");
                var hexColor = aeLabelColor.replace(/"(.+?"*)"/g, function (fullMatch, string) {
                    return ArrayEx.map(string.split(""), function (character) {
                        return module.asciiToHex(character);
                    }).join("");
                });
                return module.hexAddPound(hexColor);
            };
            module.asciiToDecimal = function (ascii) {
                return ascii.charCodeAt(0);
            };
            module.asciiToHex = function (ascii) {
                return module.decimalToHex(module.asciiToDecimal(ascii));
            };
            module.decimalToAscii = function (decimal) {
                return String.fromCharCode(decimal);
            };
            module.decimalToHex = function (decimal) {
                return decimal.toString(16);
            };
            module.extendHex = function (shortHex) {
                shortHex = module.hexRemovePound(shortHex);
                if (shortHex.length === 6) {
                    return module.hexAddPound(shortHex);
                }
                var hexColor = ArrayEx.map(shortHex.split(""), function (component) {
                    return component + component;
                }).join("");
                return module.hexAddPound(hexColor);
            };
            module.extendRgb = function (rgb) {
                return rgb * 255;
            };
            module.hexAddPound = function (string) {
                return string.charAt(0) === "#" ? string : "#" + string;
            };
            module.hexColorToAELabelColor = function (hexColor) {
                if (!module.isValidHexColor(hexColor)) {
                    throw hexColor + " is not a valid hex color";
                }
                hexColor = module.extendHex(hexColor);
                hexColor = module.hexRemovePound(hexColor);
                hexColor = "FF" + hexColor;
                var aeLabelColor = "";
                for (var i = 0, il = hexColor.length; i < il; i += 2) {
                    var hexPair = hexColor.substring(i, i + 2);
                    var ascii = hexPair;
                    if (isPrintableCharacter(hexPair)) {
                        ascii = "\"" + module.hexToAscii(hexPair) + "\"";
                    }
                    if (((aeLabelColor.length > 1) && (aeLabelColor.charAt(aeLabelColor.length - 1) === "\"")) && (ascii.charAt(0) === "\"")) {
                        aeLabelColor = aeLabelColor.substring(0, aeLabelColor.length - 1);
                        ascii = ascii.substring(1, ascii.length);
                    }
                    aeLabelColor += ascii;
                }
                return aeLabelColor;
            };
            module.hexColorToAsciiColor = function (hexColor) {
                hexColor = module.extendHex(hexColor);
                hexColor = module.hexRemovePound(hexColor);
                hexColor = "FF" + hexColor;
                var asciiColor = "";
                for (var i = 0, il = hexColor.length; i < il; i += 2) {
                    var hexPair = hexColor.substring(i, i + 2);
                    var ascii = module.hexToAscii(hexPair);
                    if (ascii === "\x00") {
                        ascii = "\x01";
                    }
                    asciiColor += ascii;
                }
                return asciiColor;
            };
            module.hexColorToAdobeRGB = function (hexColor) {
                return module.normaliseRgb(module.hexColorToRgb(hexColor));
            };
            module.hexColorToRgb = function (hexColor) {
                hexColor = module.extendHex(hexColor);
                hexColor = module.hexRemovePound(hexColor);
                var r = parseInt(hexColor.substring(0, 2), 16);
                var g = parseInt(hexColor.substring(2, 4), 16);
                var b = parseInt(hexColor.substring(4, 6), 16);
                return [r, g, b];
            };
            module.hexRemovePound = function (string) {
                return string.charAt(0) === "#" ? string.slice(1) : string;
            };
            module.hexToAscii = function (hex) {
                return module.decimalToAscii(module.hexToDecimal(hex));
            };
            module.hexToDecimal = function (hex) {
                return parseInt(module.hexRemovePound(hex), 16);
            };
            module.isValidHexColor = function (hexColor) {
                hexColor = module.hexAddPound(hexColor);
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColor);
            };
            module.normaliseRgb = function (rgb) {
                return rgb / 255;
            };
            module.rgbToHexColor = function (rgb) {
                var r = rgb[0];
                var g = rgb[1];
                var b = rgb[2];
                var hexColor = componentToHex(r) + componentToHex(g) + componentToHex(b);
                return module.hexAddPound(hexColor);
            };
            return module;
        })();
        var ErrorHandler = (function () {
            var module = {};
            module.show = function (error) {
                var message = error.toString();
                if (error instanceof Error) {
                    message += "\nScript File: " + File(error.fileName).displayName + "\nFunction: " + arguments.callee.name + "\nError on Line: " + error.line.toString();
                }
                alert(message);
            };
            return module;
        })();
        var FileEx = (function () {
            var module = {};
            module.canWriteFiles = function (scriptName) {
                function isSecurityPrefSet() {
                    return app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY") === 1;
                }
                scriptName = (scriptName) || ("Script");
                var appVersion = parseFloat(app.version);
                var commandID = 2359;
                var tabName = "General";
                if (appVersion >= 16.1) {
                    commandID = 3131;
                    tabName = "Scripting & Expressions";
                }
                if (isSecurityPrefSet()) {
                    return true;
                }
                alert(message = scriptName + " requires access to write files.\n" + "Go to the \"" + tabName + "\" panel of the application preferences and make sure " + "\"Allow Scripts to Write Files and Access Network\" is checked.");
                app.executeCommand(commandID);
                return isSecurityPrefSet();
            };
            module.copy = function (source, destination) {
                source = FileEx.getFileObject(source);
                destination = FileEx.getFileObject(destination);
                var cmd = "cp -a \"" + source.fsName + "\" \"" + destination.fsName + "\"";
                if (Os.isWindows()) {
                    cmd = "cmd.exe /c\" copy \"" + source.fsName + "\" \"" + destination.fsName + "\" /Y\"";
                }
                system.callSystem(cmd);
            };
            module.getBaseName = function (file) {
                file = module.getFileObject(file);
                return File.decode(file.name).split(".").slice(0, -1).join(".");
            };
            module.getExtension = function (file) {
                file = module.getFileObject(file);
                return file.fsName.split(".").pop();
            };
            module.getFileObject = function (file) {
                return file instanceof File ? file : new File(file);
            };
            module.readFile = function (file, encoding) {
                file = module.getFileObject(file);
                encoding = (encoding) || ("UTF-8");
                if (!file.exists) {
                    throw new Error("File does not exist at path " + file.fsName);
                }
                if (!File.isEncodingAvailable(encoding)) {
                    throw new Error("Encoding " + encoding + " is not available for file " + file.fsName);
                }
                file.encoding = encoding;
                file.open();
                var contents = file.read();
                file.close();
                return contents;
            };
            module.remove = function (source) {
                source = module.getFileObject(source);
                var cmd = "rm -R \"" + source.fsName + "\"";
                if (Os.isWindows()) {
                    cmd = "cmd.exe /c\" del \"" + source.fsName + "\"\"";
                }
                system.callSystem(cmd);
            };
            module.selectFiles = function (extensions, multiSelect, message) {
                function getFilterForFiles(extensions) {
                    extensions = ArrayEx.ensureIsArray(extensions);
                    if (Os.isWindows()) {
                        return "*." + extensions.join(";*.");
                    }
                    var extensionListRe = ".(" + extensions.join("|") + ")$";
                    var re = new RegExp(extensionListRe, "i");
                    return function (file) {
                        return (file.name.match(re)) || (file instanceof Folder);
                    };
                }
                multiSelect = (multiSelect) || (false);
                if (typeof message === "undefined") {
                    message = multiSelect ? "Please select multiple files" : "Please select file";
                }
                var files = File.openDialog(message, getFilterForFiles(extensions), multiSelect);
                return files;
            };
            module.write = function (file, contents, encoding, openMode) {
                file = module.getFileObject(file);
                encoding = (encoding) || ("UTF-8");
                openMode = (openMode) || ("w");
                FolderEx.ensureFolderExists(file.parent);
                file.encoding = encoding;
                file.open(openMode);
                var success = file.write(contents);
                file.close();
                if (!success) {
                    throw new Error("Unable to write file " + file.fsName);
                }
                return file;
            };
            return module;
        })();
        var FolderEx = (function () {
            var module = {};
            module.ensureFolderExists = function (folder) {
                folder = module.getFolderObject(folder);
                if (!folder.exists) {
                    if (!folder.create()) {
                        throw new Error("Could not create folder " + folder.fsName);
                    }
                }
                return folder;
            };
            module.getFiles = function (path, filter) {
                filter = (filter) || ("");
                var folder = module.getFolderObject(path);
                return folder.getFiles(filter);
            };
            module.getFiles2 = function (folder, filter) {
                folder = module.getFolderObject(folder);
                return Folder(folder).getFiles(function (item) {
                    if ((item instanceof File) && (item.name.match(filter))) {
                        return item;
                    }
                });
            };
            module.getFolderObject = function (folder) {
                return folder instanceof Folder ? folder : new Folder(folder);
            };
            return module;
        })();
        if (typeof JSON !== "object") {
            JSON = {};
        }
        (function () {
            function f(n) {
                return n < 10 ? "0" + n : n;
            }
            function this_value() {
                return this.valueOf();
            }
            function quote(string) {
                escapable.lastIndex = 0;
                return escapable.test(string) ? "\"" + string.replace(escapable, function (a) {
                    var c = meta[a];
                    return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                }) + "\"" : "\"" + string + "\"";
            }
            function str(key, holder) {
                var mind = gap;
                var value = holder[key];
                if (((value) && (typeof value === "object")) && (typeof value.toJSON === "function")) {
                    value = value.toJSON(key);
                }
                if (typeof rep === "function") {
                    value = rep.call(holder, key, value);
                }
                switch (typeof value) {
                    case "string":
                        return quote(value);
                    case "number":
                        return isFinite(value) ? String(value) : "null";
                    case "boolean":
                    case "null":
                        return String(value);
                    case "object":
                        if (!value) {
                            return "null";
                        }
                        gap += indent;
                        partial = [];
                        if (Object.prototype.toString.apply(value) === "[object Array]") {
                            length = value.length;
                            for (var i = 0; i < length; i++) {
                                partial[i] = (str(i, value)) || ("null");
                            }
                            v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                            gap = mind;
                            return v;
                        }
                        if ((rep) && (typeof rep === "object")) {
                            length = rep.length;
                            for (var i = 0; i < length; i++) {
                                if (typeof rep[i] === "string") {
                                    k = rep[i];
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + gap ? ": " : ":" + v);
                                    }
                                }
                            }
                        }
                        else {
                            for (var k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + gap ? ": " : ":" + v);
                                    }
                                }
                            }
                        }
                        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                        gap = mind;
                        return v;
                }
            }
            if (typeof Date.prototype.toJSON !== "function") {
                Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
                };
                Boolean.prototype.toJSON = this_value;
                Number.prototype.toJSON = this_value;
                String.prototype.toJSON = this_value;
            }
            if (typeof JSON.stringify !== "function") {
                escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", "\"": "\\\"", "\\": "\\\\" };
                JSON.stringify = function (value, replacer, space) {
                    gap = "";
                    indent = "";
                    if (typeof space === "number") {
                        for (var i = 0; i < space; i++) {
                            indent += " ";
                        }
                    }
                    else {
                        if (typeof space === "string") {
                            indent = space;
                        }
                    }
                    rep = replacer;
                    if (((replacer) && (typeof replacer !== "function")) && ((typeof replacer !== "object") || (typeof replacer.length !== "number"))) {
                        throw new Error("JSON.stringify");
                    }
                    return str("", { "": value });
                };
            }
            if (typeof JSON.parse !== "function") {
                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                JSON.parse = function (text, reviver) {
                    function walk(holder, key) {
                        var value = holder[key];
                        if ((value) && (typeof value === "object")) {
                            for (var k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = walk(value, k);
                                    if (v !== undefined) {
                                        value[k] = v;
                                    }
                                    else {
                                        delete value[k];
                                    }
                                }
                            }
                        }
                        return reviver.call(holder, key, value);
                    }
                    text = String(text);
                    cx.lastIndex = 0;
                    if (cx.test(text)) {
                        text = text.replace(cx, function (a) {
                            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                        });
                    }
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                        j = eval("(" + text + ")");
                        return typeof reviver === "function" ? walk({ "": j }, "") : j;
                    }
                    throw new SyntaxError("JSON.parse");
                };
            }
        })();
        var ObjectEx = (function () {
            var module = {};
            module.assign = function (target, sources) {
                if (typeof sources === "undefined") {
                    return target;
                }
                sources = ArrayEx.ensureIsArray(sources);
                ArrayEx.forEach(sources, function (source) {
                    if (!module.isObject(source)) {
                        return;
                    }
                    module.forOwn(source, function (value, key, object) {
                        target[key] = value;
                    });
                });
                return target;
            };
            module.findKey = function (object, callback) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (callback(object[key], key, object)) {
                            return key;
                        }
                    }
                }
            };
            module.findKeyByValue = function (object, value) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (object[key] === value) {
                            return key;
                        }
                    }
                }
            };
            module.forOwn = function (object, callback) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        callback(object[key], key, object);
                    }
                }
            };
            module.keys = function (object) {
                var index = 0;
                var keys = [];
                module.forOwn(object, function (value, key, object) {
                    keys[index] = key;
                    index++;
                });
                return keys;
            };
            module.isObject = function (object) {
                return (typeof object === "object") && (object !== null);
            };
            return module;
        })();
        var Os = (function () {
            var module = {};
            module.createZip = function (file) {
                if (!module.isMac()) {
                    throw "\"createZip\" is not supported on this OS";
                }
                file = file instanceof File ? file : new File(file);
                var cmd = "ditto -c -k --sequesterRsrc --keepParent \"" + file.fsName + "\" \"" + file.fsName + ".zip\"";
                system.callSystem(cmd);
            };
            module.isMac = function () {
                return !module.isWindows();
            };
            module.isWindows = function () {
                return $.os.indexOf("Windows") !== -1;
            };
            module.openURL = function (url) {
                if (!url.match(/^https?:\/\//)) {
                    url = url.replace(/^(http)?s?:?\/?\/?/, "");
                    url = "http://" + url;
                }
                var cmd = "open \"" + url + "\"";
                if (module.isWindows()) {
                    url = url.replace(/&/g, "^&");
                    cmd = "cmd /c \"start " + url + "\"";
                }
                system.callSystem(cmd);
            };
            module.revealInFinder = function (file) {
                file = FileEx.getFileObject(file);
                var filePath = file.fsName;
                if (!file.exists) {
                    throw "File does not exist at path " + filePath;
                }
                var cmd = "open -R \"" + filePath + "\"";
                if (module.isWindows()) {
                    cmd = "Explorer /select," + filePath;
                }
                system.callSystem(cmd);
            };
            return module;
        })();
        var Prefs = (function () {
            function getAppName() {
                return app.isBeta ? "After Effects (Beta)" : "After Effects";
            }
            function getAppVersion() {
                var version = app.version.split("x")[0];
                if (version === "22.6.4") {
                    return version;
                }
                var items = version.split(".");
                var major = items[0];
                var minor = (items[1]) || (0);
                var patch = (items[2]) || (0);
                return [major, minor].join(".");
            }
            function getFilter(PREFType) {
                PREFType = (PREFType) || ("PREF_Type_MACHINE_SPECIFIC");
                if (!MAP.hasOwnProperty(PREFType)) {
                    throw new Error("PREFType " + PREFType + " does not exist");
                }
                return MAP[PREFType];
            }
            function getRootFolder() {
                return Os.isWindows() ? Folder.userData.fsName : Folder.userData.parent.fsName + "/Preferences";
            }
            function isComment(string) {
                return StringEx.startsWith(string, "#");
            }
            function isSection(string) {
                return (StringEx.startsWith(string, "[")) && (StringEx.endsWith(string, "]"));
            }
            function joinMultiline(string) {
                return string.replace(/"*\\[\n|\r]\s*"?/g, "");
            }
            function sortByDate(f1, f2) {
                return f1.modified < f2.modified;
            }
            function toJson(string) {
                var json = {};
                StringEx.forEachLine(joinMultiline(string), function (line) {
                    line = StringEx.trim(line);
                    if ((isComment(line)) || (!line)) {
                        return;
                    }
                    if (isSection(line)) {
                        section = line.replace(/["\[\]]/g, "");
                        json[section] = {};
                    }
                    else {
                        if (!section) {
                            throw new Error("Section not found");
                        }
                        var match = line.match(/^(".*?")( = )(.*)/);
                        if ((!match) || (match.length !== 4)) {
                            throw new Error("Could not parse key-value from line\n" + line);
                        }
                        var key = StringEx.unquote(match[1]);
                        var value = StringEx.unquote(match[3]);
                        json[section][key] = value;
                    }
                });
                return json;
            }
            var ArrayEx = (function () {
                var module = {};
                module.forEach = function (array, callback) {
                    for (var i = 0, il = array.length; i < il; i++) {
                        callback(array[i], i, array);
                    }
                };
                return module;
            })();
            var FileEx = (function () {
                var module = {};
                module.getFileObject = function (file) {
                    return file instanceof File ? file : new File(file);
                };
                module.readFile = function (file, encoding) {
                    file = module.getFileObject(file);
                    encoding = (encoding) || ("UTF-8");
                    if (!file.exists) {
                        throw new Error("File does not exist at path " + file.fsName);
                    }
                    if (!File.isEncodingAvailable(encoding)) {
                        throw new Error("Encoding " + encoding + " is not available for file " + file.fsName);
                    }
                    file.encoding = encoding;
                    file.open();
                    var contents = file.read();
                    file.close();
                    return contents;
                };
                return module;
            })();
            var FolderEx = (function () {
                var module = {};
                module.getFolderObject = function (folder) {
                    return folder instanceof Folder ? folder : new Folder(folder);
                };
                return module;
            })();
            var Os = (function () {
                var module = {};
                module.isMac = function () {
                    return !module.isWindows();
                };
                module.isWindows = function () {
                    return $.os.indexOf("Windows") !== -1;
                };
                return module;
            })();
            var StringEx = (function () {
                var module = {};
                module.endsWith = function (string1, string2, length) {
                    if ((length === undefined) || (length > string1.length)) {
                        length = string1.length;
                    }
                    return string1.substring(length - string2.length, length) === string2;
                };
                module.forEachLine = function (string, callback) {
                    ArrayEx.forEach(module.splitLines(string), function (line, i, lines) {
                        callback(line, i, lines, string);
                    });
                };
                module.splitLines = function (string) {
                    return string.split(/\r?\n/);
                };
                module.startsWith = function (string1, string2, position) {
                    position = typeof position === "number" ? position : 0;
                    return string1.substring(position, position + string2.length) === string2;
                };
                module.trim = function (string) {
                    return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                };
                module.unquote = function (string) {
                    return (module.startsWith(string, "\"")) && (module.endsWith(string, "\"")) ? string.substring(1, string.length - 1) : string;
                };
                return module;
            })();
            var module = {};
            var MAP = { PREF_Type_MACHINE_INDEPENDENT: "*-indep-general*", PREF_Type_MACHINE_INDEPENDENT_COMPOSITION: "*-indep-composition*", PREF_Type_MACHINE_INDEPENDENT_OUTPUT: "*-indep-output*", PREF_Type_MACHINE_INDEPENDENT_RENDER: "*-indep-render*", PREF_Type_MACHINE_SPECIFIC: "Prefs*", PREF_Type_MACHINE_SPECIFIC_PAINT: "*-paint*", PREF_Type_MACHINE_SPECIFIC_TEXT: "*-text*" };
            module.getFile = function (PREFType) {
                app.preferences.saveToDisk();
                var files = module.getFiles(PREFType);
                files.sort(sortByDate);
                return files[0];
            };
            module.getFiles = function (PREFType) {
                var folder = module.getFolder();
                if (!folder.exists) {
                    throw new Error("Preferences folder does not exist at path " + folder.fsName);
                }
                var filter = getFilter(PREFType);
                var files = folder.getFiles(filter);
                if (files.length === 0) {
                    throw new Error("Could not find files with filter \"" + filter + "\" in Preferences folder at path " + folder.fsName);
                }
                return files;
            };
            module.getFolder = function () {
                return FolderEx.getFolderObject(getRootFolder() + "/Adobe/" + getAppName() + "/" + getAppVersion());
            };
            module.getJson = function (PREFType) {
                return toJson(FileEx.readFile(module.getFile(PREFType)));
            };
            return module;
        })();
        var Sort = (function () {
            var module = {};
            module.alphaNum = function (a, b) {
                var reA = /[^a-zA-Z]/g;
                var reN = /[^0-9]/g;
                var aA = a.replace(reA, "");
                var bA = b.replace(reA, "");
                if (aA === bA) {
                    var aN = parseInt(a.replace(reN, ""), 10);
                    var bN = parseInt(b.replace(reN, ""), 10);
                    return aN === bN ? 0 : aN > bN ? 1 : -1;
                }
                else {
                    return aA > bA ? 1 : -1;
                }
            };
            return module;
        })();
        var StringEx = (function () {
            var module = {};
            module.equalsInsensitive = function (string1, string2) {
                return string1.toUpperCase() === string2.toUpperCase();
            };
            module.trim = function (string) {
                return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            };
            return module;
        })();
        var Types = (function () {
            var module = {};
            module.isArray = function (value) {
                return ArrayEx.isArray(value);
            };
            module.isBoolean = function (value) {
                return typeof value === "boolean";
            };
            module.isNumber = function (value) {
                return (typeof value === "number") && (isFinite(value));
            };
            return module;
        })();
        var UI = (function () {
            var module = {};
            module.addButton = function (container, text, config) {
                return ObjectEx.assign(container.add("button", undefined, text), (config) || ({}));
            };
            module.addCheckbox = function (container, title, config) {
                return ObjectEx.assign(container.add("checkbox", undefined, title), (config) || ({}));
            };
            module.addColumn = function (container, config) {
                var group = module.addRow(container, config);
                group.orientation = "column";
                return group;
            };
            module.addEditText = function (container, config, creationProperties) {
                return ObjectEx.assign(container.add("edittext", undefined, undefined, creationProperties), (config) || ({}));
            };
            module.addIconButton = function (container, image, config) {
                return ObjectEx.assign(container.add("iconbutton", undefined, image), (config) || ({}));
            };
            module.addPanel = function (container, name, config) {
                return ObjectEx.assign(container.add("panel", undefined, name), (config) || ({}));
            };
            module.addRow = function (container, config) {
                return ObjectEx.assign(container.add("group"), (config) || ({}));
            };
            module.addStaticText = function (container, text, config, creationProperties) {
                return ObjectEx.assign(container.add("statictext", undefined, text, creationProperties), (config) || ({}));
            };
            module.changeOrientation = function (container) {
                container.orientation = container.size.width > container.size.height ? "row" : "column";
            };
            module.clear = function (container) {
                while (container.children[0]) {
                    container.remove(container.children[0]);
                }
            };
            module.createDialog = function (title, config) {
                return ObjectEx.assign(new Window("dialog", title), (config) || ({}));
            };
            module.createFloatingPanel = function (thisObj, title, config) {
                return ObjectEx.assign(thisObj instanceof Panel ? thisObj : new Window("palette", title, undefined, { resizeable: true }), (config) || ({}));
            };
            module.createPalette = function (title, config) {
                return ObjectEx.assign(new Window("palette", title), (config) || ({}));
            };
            module.getNewBrush = function (button, color) {
                return button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, color);
            };
            module.getWindowFromChild = function (element) {
                while (element.parent) {
                    element = element.parent;
                }
                return element;
            };
            module.onDraw = function () {
                this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
                this.graphics.fillPath(this.fillBrush);
            };
            module.refresh = function (container) {
                container.layout.layout(true);
                container.layout.resize();
            };
            module.setElementColor = function (element, color) {
                element.graphics.foregroundColor = element.graphics.newPen(element.graphics.PenType.SOLID_COLOR, color, 1);
            };
            module.show = function (window) {
                if (window instanceof Window) {
                    window.center();
                    window.show();
                }
                else {
                    module.refresh(window);
                }
            };
            return module;
        })();
        var KeyframeService = (function () {
            function forPropertiesInActiveComp(callback) {
                var composition = Ae.getActiveCompositionWithAlert();
                if (!composition) {
                    return;
                }
                if (composition.selectedLayers.length === 0) {
                    return alert("Please select some layers first");
                }
                Ae.forEachSelectedLayer(composition, function (layer) {
                    Ae.forEachPropertyRecursively(layer, function (property) {
                        callback(property);
                    });
                });
            }
            var module = {};
            module.getActiveLabelsIDs = function () {
                var labelsIDs = [];
                forPropertiesInActiveComp(function (property) {
                    if (Ae.canHaveKeyframes(property)) {
                        Ae.forEachKeyframe(property, function (keyIndex) {
                            labelsIDs.push(property.keyLabel(keyIndex));
                        });
                    }
                });
                return ArrayEx.sort(ArrayEx.uniqFast(labelsIDs));
            };
            module.deselect = function () {
                var composition = Ae.getActiveComposition();
                if (!composition) {
                    return;
                }
                ArrayEx.forEach(composition.selectedProperties, function (property) {
                    if (Ae.canHaveKeyframes(property)) {
                        ArrayEx.forEach(property.selectedKeys, function (keyIndex) {
                            property.setSelectedAtKey(keyIndex, false);
                        });
                    }
                });
            };
            module.invertSelection = function (label) {
                forPropertiesInActiveComp(function (property) {
                    (Ae.canHaveKeyframes(property)) && (Ae.invertKeyframeSelectedByLabel(property, label));
                });
            };
            module.removeFromSelection = function (label) {
                forPropertiesInActiveComp(function (property) {
                    (Ae.canHaveKeyframes(property)) && (Ae.setKeyframeSelectedByLabel(property, label, false));
                });
            };
            module.resetLabelColor = function (propagate) {
                module.setLabelColor(0, propagate);
            };
            module.select = function (label) {
                forPropertiesInActiveComp(function (property) {
                    (Ae.canHaveKeyframes(property)) && (Ae.setKeyframeSelectedByLabel(property, label, true));
                });
            };
            module.setLabelColor = function (label, propagate) {
                var composition = Ae.getActiveComposition();
                if (!composition) {
                    return;
                }
                ArrayEx.forEach(composition.selectedProperties, function (property) {
                    if ((Ae.canHaveKeyframes(property)) && (property.selectedKeys.length > 0)) {
                        ArrayEx.forEach(property.selectedKeys, function (keyIndex) {
                            property.setLabelAtKey(keyIndex, label);
                        });
                        if (propagate) {
                            var layer = Ae.getLayerFromProperty(property);
                            layer.label = label;
                            if (layer.source) {
                                layer.source.label = label;
                            }
                        }
                    }
                });
            };
            return module;
        })();
        var LayerAndItemService = (function () {
            function setDefaultItemLabel(item) {
                item.label = LabelObject.getDefaultItemLabel(item);
            }
            function setDefaultLayerLabel(layer) {
                layer.label = LabelObject.getDefaultLayerLabel(layer);
            }
            function setSelected(layer, value) {
                if (!layer.locked) {
                    layer.selected = value;
                }
                else {
                    if ((layer.locked) && (Settinger.get("affectLockedLayers"))) {
                        layer.locked = false;
                        layer.selected = value;
                        layer.locked = true;
                    }
                }
            }
            var module = {};
            module.getActiveLabelsIDs = function () {
                var labelsIDs = [];
                var composition = Ae.getActiveComposition();
                if (composition) {
                    Ae.forEachLayer(composition, function (layer) {
                        labelsIDs.push(layer.label);
                    });
                }
                else {
                    Ae.forEachItem(app.project, function (item) {
                        labelsIDs.push(item.label);
                    });
                }
                return ArrayEx.sort(ArrayEx.uniqFast(labelsIDs));
            };
            module.deselect = function () {
                var composition = Ae.getActiveComposition();
                if (composition) {
                    Ae.forEachSelectedLayer(composition, function (layer) {
                        setSelected(layer, false);
                    });
                }
                else {
                    Ae.forEachItem(app.project, function (item) {
                        item.selected = false;
                    });
                }
            };
            module.inverseSelection = function (label) {
                var composition = Ae.getActiveComposition();
                if (composition) {
                    Ae.forEachLayer(composition, function (layer) {
                        setSelected(layer, layer.label !== label);
                    });
                }
                else {
                    Ae.forEachItem(app.project, function (item) {
                        item.selected = item.label !== label;
                    });
                }
            };
            module.removeFromSelection = function (label) {
                var composition = Ae.getActiveComposition();
                if (composition) {
                    Ae.forEachSelectedLayer(composition, function (layer) {
                        if (layer.label === label) {
                            setSelected(layer, false);
                        }
                    });
                }
                else {
                    ArrayEx.forEach(app.project.selection, function (item) {
                        if (item.label === label) {
                            item.selected = false;
                        }
                    });
                }
            };
            module.resetLabelColor = function (propagate) {
                var composition = Ae.getActiveComposition();
                if (composition) {
                    if (composition.selectedLayers.length > 0) {
                        Ae.forEachSelectedLayer(composition, function (layer) {
                            setDefaultLayerLabel(layer);
                            ((propagate) && (layer.source)) && (setDefaultItemLabel(layer.source));
                        });
                    }
                    else {
                        setDefaultItemLabel(composition);
                    }
                }
                else {
                    ArrayEx.forEach(app.project.selection, function (item) {
                        setDefaultItemLabel(item);
                        if (propagate) {
                            if (typeof item.usedIn === "undefined") {
                                return;
                            }
                            ArrayEx.forEach(item.usedIn, function (composition) {
                                Ae.forEachLayer(composition, function (layer) {
                                    if ((layer.source) && (layer.source === item)) {
                                        setDefaultLayerLabel(layer);
                                    }
                                });
                            });
                        }
                    });
                }
            };
            module.select = function (label) {
                var composition = Ae.getActiveComposition();
                if (composition) {
                    Ae.forEachLayer(composition, function (layer) {
                        if (layer.label === label) {
                            setSelected(layer, true);
                        }
                    });
                }
                else {
                    Ae.forEachItem(app.project, function (item) {
                        item.selected = true;
                    });
                }
            };
            module.setLabelColor = function (label, propagate) {
                var composition = Ae.getActiveComposition();
                if (composition) {
                    if (composition.selectedLayers.length > 0) {
                        Ae.forEachSelectedLayer(composition, function (layer) {
                            layer.label = label;
                            if ((propagate) && (layer.source)) {
                                layer.source.label = label;
                            }
                        });
                    }
                    else {
                        composition.label = label;
                    }
                }
                else {
                    ArrayEx.forEach(app.project.selection, function (item) {
                        item.label = label;
                        if (propagate) {
                            if (typeof item.usedIn === "undefined") {
                                return;
                            }
                            ArrayEx.forEach(item.usedIn, function (composition) {
                                Ae.forEachLayer(composition, function (layer) {
                                    if ((layer.source) && (layer.source === item)) {
                                        layer.label = label;
                                    }
                                });
                            });
                        }
                    });
                }
            };
            return module;
        })();
        var KeyUtils = (function () {
            function removeKeyframeKeys(keys) {
                return ArrayEx.filter(keys, function (key) {
                    return !ArrayEx.includes(Settinger.get("keyTargetKeyframes"), key);
                });
            }
            var module = {};
            module.init = function () {
                var keys = Keys.get();
                var targetKeyframes = module.isTargetingKeyframes();
                if (targetKeyframes) {
                    if (!Ae.supportsKeyframeLabels()) {
                        return alert("Current version of After Effects does not support keyframe labels.");
                    }
                    keys = removeKeyframeKeys(keys);
                }
                return { keys: keys, targetKeyframes: targetKeyframes };
            };
            module.isTargetingKeyframes = function () {
                return (Settinger.get("keyTargetKeyframesEnabled")) && (ArrayEx.every(Settinger.get("keyTargetKeyframes"), function (key) {
                    return ArrayEx.includes(Keys.get(), key);
                }));
            };
            module.isTargetingThis = function (enabled, key, keys) {
                return (Settinger.get(enabled)) && (ArrayEx.sameContext(keys, Settinger.get(key)));
            };
            return module;
        })();
        var Utils = (function () {
            var module = {};
            module.getUserDataFolder = function () {
                return FolderEx.ensureFolderExists(Folder.userData.fsName + "/aescripts/renderTom/" + ScriptConfig.get("name") + "/v" + ScriptConfig.get("version"));
            };
            return module;
        })();
        var CustomScriptsUI = (function () {
            function addElement(i) {
                var elementName = SETS[i].name;
                var grpLine = UI.addRow(grpContainer, { alignChildren: ["left", "bottom"], spacing: 2 });
                var checkbox = UI.addCheckbox(grpLine, undefined, {
                    onClick: function () {
                        grpControlls.enabled = this.value;
                        SETS[i].enabled = this.value;
                    }, text: elementName, value: SETS[i].enabled
                });
                checkbox.preferredSize.width = checkboxSize;
                var grpControlls = UI.addRow(grpLine, { alignment: ["fill", "bottom"], enabled: checkbox.value, spacing: 2 });
                var keyNames = SETS[i].shortcut;
                var keySigns = Keys.namesToSigns(keyNames);
                var text = Keys.keysToString(keySigns);
                var etShortcut = UI.addEditText(grpControlls, {
                    helpTip: "Keyboard shortcut for " + checkbox.text, onChange: function () {
                        var keySigns = Keys.stringToKeys(this.text.toLowerCase());
                        var keyNames = Keys.signsToNames(keySigns);
                        SETS[i].shortcut = keyNames;
                    }, text: text
                });
                etShortcut.preferredSize.width = keySize;
                var etPath = UI.addEditText(grpControlls, { alignment: ["fill", "fill"], helpTip: "Script path for " + checkbox.text, text: SETS[i].path });
                etPath.preferredSize.width = 200;
                UI.addButton(grpControlls, undefined, {
                    alignment: ["right", "center"], helpTip: "Select script file", onClick: function () {
                        var scriptFile = FileEx.selectFiles(["js", "jsx", "jsxbin", "txt"]);
                        if (!scriptFile) {
                            return;
                        }
                        SETS[i].name = FileEx.getBaseName(scriptFile);
                        SETS[i].path = scriptFile.fsName;
                        checkbox.text = FileEx.getBaseName(scriptFile);
                        etPath.text = scriptFile.fsName;
                    }, preferredSize: [smallBtnSize * 2, smallBtnSize], text: "..."
                });
                var grpPlusMinus = UI.addRow(grpLine, { alignment: ["right", "center"], spacing: 2 });
                UI.addIconButton(grpPlusMinus, ImagesConfig.get("up"), {
                    enabled: i !== 0, helpTip: "Move \"" + elementName + "\" up", onClick: function () {
                        ArrayEx.swap(SETS, i, i - 1);
                        populate();
                    }, preferredSize: [smallBtnSize, smallBtnSize]
                });
                UI.addIconButton(grpPlusMinus, ImagesConfig.get("down"), {
                    enabled: i !== (SETS.length - 1), helpTip: "Move \"" + elementName + "\" down", onClick: function () {
                        ArrayEx.swap(SETS, i, i + 1);
                        populate();
                    }, preferredSize: [smallBtnSize, smallBtnSize]
                });
                UI.addIconButton(grpPlusMinus, ImagesConfig.get("trash"), {
                    enabled: (SETS.length - 1) !== 0, helpTip: "Remove \"" + elementName + "\" from the list", onClick: function () {
                        var message = "Are you sure you want to remove \"" + checkbox.text + "\"? There\'s no going back after this.";
                        if ((File(SETS[i].path).exists) && (!confirm(message))) {
                            return;
                        }
                        arrayRemoveAtIndex(SETS, i);
                        populate();
                    }, preferredSize: [smallBtnSize, smallBtnSize]
                });
                UI.addIconButton(grpPlusMinus, ImagesConfig.get("plus"), {
                    helpTip: "Add additional entry", onClick: function () {
                        createNew(i + 1);
                        populate();
                    }, preferredSize: [smallBtnSize, smallBtnSize]
                });
            }
            function arrayAddAtIndex(array, index, element) {
                array.splice(index, 0, element);
            }
            function arrayRemoveAtIndex(array, index) {
                array.splice(index, 1);
            }
            function createNew(index) {
                arrayAddAtIndex(SETS, index, { enabled: true, name: "Custom script", path: "", shortcut: "" });
            }
            function getPrefsFile() {
                return FileEx.getFileObject(Utils.getUserDataFolder().fsName + "/Custom Scripts.json");
            }
            function populate() {
                var winSizeOnLoad = win.size;
                UI.clear(grpContainer);
                if (SETS.length === 0) {
                    createNew(0);
                    populate();
                }
                else {
                    ArrayEx.forEach(SETS, function (item, index) {
                        addElement(index);
                    });
                }
                win.layout.layout(true);
                if (winSizeOnLoad) {
                    win.size.width = winSizeOnLoad.width;
                }
            }
            function saveIfModified() {
                try {
                    for (var i = SETS.length - 1; i >= 0; i--) {
                        if (SETS[i].path === "") {
                            arrayRemoveAtIndex(SETS, i);
                        }
                    }
                    var seen = {};
                    for (var i = 0, il = SETS.length; i < il; i++) {
                        if (!SETS[i].enabled) {
                            continue;
                        }
                        var text = StringEx.trim(SETS[i].shortcut.toString());
                        var etShortcut = grpContainer.children[i].children[1].children[0];
                        if (text === "") {
                            etShortcut.active = true;
                            return alert("Please specify keyboard shortcut for \"" + SETS[i].name + "\" script.");
                        }
                        if (!seen.hasOwnProperty(text)) {
                            seen[text] = i;
                        }
                        else {
                            etShortcut.active = true;
                            return alert("Found duplicate entries for shortcut \"" + text + "\"");
                        }
                    }
                    var before = JSON.stringify(prefsOnLoad);
                    var after = JSON.stringify(SETS);
                    if (before !== after) {
                        FileEx.write(getPrefsFile(), JSON.stringify(SETS, false, 4));
                        prefsOnLoad = SETS;
                    }
                    win.close();
                } catch (error) {
                    ErrorHandler.show(error);
                }
            }
            var separator = "+";
            var checkboxSize = 168;
            var keySize = 50;
            var smallBtnSize = 22;
            var module = {};
            module.init = function () {
                var prefsFile = getPrefsFile();
                if (!prefsFile.exists) {
                    FileEx.write(prefsFile, "[]");
                }
                prefsOnLoad = JSON.parse((FileEx.readFile(prefsFile)) || ("[]"));
            };
            module.show = function () {
                win = new Window("dialog", "Snippet editor", undefined, { resizeable: true });
                win.alignChildren = ["fill", "top"];
                win.margins = 0;
                win.spacing = 0;
                win.onResizing = win.onResize = function () {
                    this.layout.resize();
                };
                SectionHeader.init(win);
                var grpInner = UI.addColumn(win, { alignChildren: ["fill", "top"], margins: 5, orientation: "column" });
                var grpPanel = UI.addPanel(grpInner, undefined, { alignChildren: ["fill", "top"] });
                var grpBlock = UI.addColumn(grpPanel, { alignChildren: ["fill", "top"], spacing: 2 });
                var grpTitle = UI.addRow(grpBlock, { spacing: 2 });
                UI.addStaticText(grpTitle, "Script name:").preferredSize.width = checkboxSize;
                UI.addStaticText(grpTitle, "Key:").preferredSize.width = keySize;
                UI.addStaticText(grpTitle, "Path to script file:");
                grpContainer = UI.addColumn(grpBlock, { alignChildren: ["fill", "top"], spacing: 2 });
                SETS = JSON.parse(JSON.stringify(prefsOnLoad));
                populate();
                var grpFooter = UI.addRow(grpInner, { margins: 10 });
                UI.addButton(grpFooter, undefined, {
                    onClick: function () {
                        Os.openURL("https://github.com/rendertom/Labels#snippets");
                    }, text: "Download snippets"
                });
                var grpRight = UI.addRow(grpFooter, { alignment: ["right", "top"] });
                UI.addButton(grpRight, undefined, { onClick: win.close, text: "Cancel" });
                UI.addButton(grpRight, undefined, { active: true, onClick: saveIfModified, text: "Save" });
                win.layout.layout(true);
                win.center();
                win.show();
            };
            module.get = function () {
                return prefsOnLoad;
            };
            return module;
        })();
        var MainUI = (function () {
            function createButtton(parameters) {
                return UI.addButton(win, undefined, parameters);
            }
            function createSwatch(index, name, hexColor) {
                var button = createButtton({ helpTip: Settinger.get("showTooltip") ? name : "", hexColor: hexColor, index: index, name: name, onClick: SwatchController.onClick, text: index });
                button.fillBrush = UI.getNewBrush(button, Color.hexColorToAdobeRGB(hexColor));
                eval("@JSXBIN@ES@2.1@MyBbyBn0ABOAbyBn0ABJBnABXzGjPjOiEjSjBjXBfjzGjCjVjUjUjPjOCfXBfjzCiViJDfnfAEXzSjTjJjMjFjOjUiMjJjDjFjOjTjFiDjIjFjDjLEfjzJiMjJjDjFjOjTjJjOjHFfnfn0DzAGByB");
                return button;
            }
            function createSwatches(labelIDs) {
                var labels = LabelObject.getThemeOnLoad().labels;
                ArrayEx.forEach(labelIDs, function (index) {
                    var name = "No Color";
                    var color = "000000";
                    if (index > 0) {
                        name = labels[index - 1].name;
                        color = labels[index - 1].color;
                    }
                    createSwatch(index, name, color);
                });
            }
            var buttons = { back: { helpTip: "Reset filter and show all labels", onClick: BackButtonController.onClick, text: "B" }, filter: { helpTip: "Show active label colors\nALT: show inactive label colors", onClick: FilterController.onClick, text: "F" }, reset: { helpTip: "Reset to default color", onClick: ResetController.onClick, text: "X" }, settings: { helpTip: "Open settings window\nSHIFT: open snippet editor,\nCMD: reload labels interface,\nALT: open Preferences > Labels window,\nALT + CMD: reveal Preferences file.", onClick: SettingsController.onClick, text: "S" } };
            var module = {};
            module.needToReload = false;
            module.showBackButton = false;
            module.show = function (thisObj) {
                win = UI.createFloatingPanel(thisObj, ScriptConfig.get("name"), {
                    alignChildren: ["fill", "fill"], margins: 0, onResize: function () {
                        UI.changeOrientation(this);
                        this.layout.resize();
                    }, onResizing: this.onResize, spacing: 0
                });
                module.populateButtons();
                UI.show(win);
            };
            module.populateButtons = function (labelIDs) {
                var winSizeOnLoad = win.size;
                UI.clear(win);
                createSwatches((labelIDs) || (LabelObject.getDefaultIDs()));
                if (Settinger.get("showFilterButton")) {
                    createButtton(buttons.filter);
                    if (module.showBackButton) {
                        createButtton(buttons.back);
                    }
                }
                createButtton(buttons.reset);
                createButtton(buttons.settings);
                UI.refresh(win);
                if (winSizeOnLoad) {
                    win.size = winSizeOnLoad;
                }
                module.needToReload = false;
            };
            return module;
        })();
        var SettingsUI = (function () {
            var module = {};
            module.show = function () {
                LabelObject.update();
                ThemeCacher.init();
                var win = UI.createDialog("Settings", { alignChildren: ["fill", "fill"], margins: 0, spacing: UIConfig.minSpacing });
                SectionHeader.init(win, [33, 10]);
                var grpMain = UI.addColumn(win, { alignChildren: ["fill", "fill"], margins: 5, spacing: 5 });
                var grpRow = UI.addRow(grpMain, { alignChildren: ["fill", "fill"], spacing: 5 });
                var grpLeft = UI.addColumn(grpRow, { alignChildren: ["fill", "top"], spacing: 5 });
                SectionTheme.init(UI.addPanel(grpLeft));
                SectionCheckboxes.init(UI.addPanel(grpLeft, undefined, { alignment: ["fill", "fill"] }));
                var grpRight = UI.addPanel(grpRow, undefined, { alignChildren: ["left", "top"], spacing: UIConfig.minSpacing });
                SectionKeys.init(grpRight);
                UI.addButton(grpRight, undefined, {
                    alignment: "fill", onClick: function () {
                        SectionCheckboxes.resetToDefaultValues();
                        SectionKeys.resetToDefaultValues();
                    }, text: "Reset settings"
                });
                UI.addButton(grpRight, undefined, { alignment: "fill", onClick: CustomScriptsUI.show, text: "Open snippet editor" });
                SectionFooter.init(grpMain);
                win.center();
                win.show();
            };
            return module;
        })();
        var SwatchChangerUI = (function () {
            function addAlert(message) {
                if (!grpContainer.alertGroup) {
                    grpContainer.alertGroup = UI.addRow(grpContainer, { alignChildren: ["fill", "center"], spacing: 0 });
                    grpContainer.alertGroup.margins.top = 10;
                }
                UI.clear(grpContainer.alertGroup);
                UI.addStaticText(grpContainer.alertGroup, message);
                win.layout.layout(true);
            }
            function btnSwatchColorClicked() {
                var decimal = Color.hexToDecimal(this.hexColor);
                var colorPickerDecimalValue = $.colorPicker(decimal);
                if (colorPickerDecimalValue !== decimal) {
                    var hexColor = Color.hexAddPound(Color.decimalToHex(colorPickerDecimalValue)).toUpperCase();
                    changeColor(this, hexColor);
                    etColor.text = hexColor;
                }
            }
            function changeColor(button, hexColor) {
                button.hexColor = hexColor;
                button.fillBrush = UI.getNewBrush(button, Color.hexColorToAdobeRGB(hexColor));
            }
            function onClickHandler() {
                try {
                    var color = StringEx.trim(etColor.text);
                    if (!hexIsValid(color)) {
                        return;
                    }
                    var name = StringEx.trim(etName.text);
                    if (name === "") {
                        etName.active = true;
                        return addAlert("Please enter Label name");
                    }
                    if (SwatchChangerController.modify(index, color, name)) {
                        MainUI.populateButtons();
                    }
                    win.close();
                } catch (error) {
                    ErrorHandler.show(error);
                }
            }
            function createGroup(container) {
                return UI.addRow(container, { alignChildren: ["left", "center"], spacing: 2 });
            }
            function createEdittext(container, name, text) {
                var statictext = UI.addStaticText(container, name);
                statictext.preferredSize.width = 40;
                return UI.addEditText(container, { alignment: ["fill", "center"], text: text });
            }
            function hexIsValid(hexColor) {
                if (!Color.isValidHexColor(hexColor)) {
                    etColor.active = true;
                    return addAlert("Please enter valid HEX string");
                }
                return true;
            }
            var module = {};
            module.show = function (labelIndex) {
                index = labelIndex;
                LabelObject.update();
                var label = LabelObject.getThemeOnLoad().labels[index];
                win = UI.createPalette("Swatch editor", { alignChildren: ["fill", "top"], margins: 0, spacing: 0 });
                win.preferredSize.width = 224;
                SectionHeader.init(win);
                grpContainer = UI.addPanel(win, undefined, { alignChildren: ["fill", "top"], margins: 10, spacing: 2 });
                var grpHexColor = createGroup(grpContainer);
                etColor = createEdittext(grpHexColor, "Color", label.color);
                etColor.onChange = function () {
                    var hexColor = StringEx.trim(etColor.text);
                    if (hexIsValid(hexColor)) {
                        changeColor(btnSwatchColor, hexColor);
                    }
                };
                var btnSwatchColor = UI.addButton(grpHexColor, undefined, { onClick: btnSwatchColorClicked, onDraw: UI.onDraw, preferredSize: [100, 22] });
                changeColor(btnSwatchColor, label.color);
                etName = createEdittext(createGroup(grpContainer), "Name", label.name);
                UI.addButton(grpContainer, undefined, { active: true, onClick: onClickHandler, text: "Save swatch" });
                win.center();
                win.show();
            };
            return module;
        })();
        var ThemeSaverUI = (function () {
            function addAlert(message) {
                if (!grpContainer.alertGroup) {
                    grpContainer.alertGroup = UI.addRow(grpContainer, { alignChildren: ["fill", "center"], spacing: 0 });
                    grpContainer.alertGroup.margins.top = 10;
                }
                UI.clear(grpContainer.alertGroup);
                UI.addStaticText(grpContainer.alertGroup, message);
                win.layout.layout(true);
            }
            function createShit(name, text) {
                var row = UI.addRow(grpContainer, { alignChildren: ["left", "center"], spacing: 2 });
                UI.addStaticText(row, name).preferredSize.width = 60;
                return UI.addEditText(row, { alignment: ["fill", "center"], text: (text) || ("") });
            }
            function onClickHandler() {
                var themeName = StringEx.trim(etThemeName.text);
                if (themeName === "") {
                    etThemeName.active = true;
                    return addAlert("Please specify theme name");
                }
                var themeFile = new File(params.themeFolder + "/" + themeName + "." + params.themeExtension);
                if (File(themeFile).exists) {
                    etThemeName.active = true;
                    return addAlert("Theme \"" + themeName + "\" already exists. Pick another name.");
                }
                params.filePath = themeFile;
                params.designer = StringEx.trim(etDesigner.text);
                params.url = StringEx.trim(etUrl.text);
                params.canSave = true;
                win.close();
            }
            var module = {};
            module.show = function (parameters) {
                params = parameters;
                win = UI.createDialog("Save theme", { alignChildren: ["fill", "top"], margins: 0, spacing: 0 });
                win.preferredSize.width = 224;
                SectionHeader.init(win);
                grpContainer = UI.addPanel(win, undefined, { alignChildren: ["fill", "top"], margins: 10, spacing: 2 });
                etThemeName = createShit("Name");
                etDesigner = createShit("Designer");
                etUrl = createShit("URL");
                UI.addButton(grpContainer, "Save theme", { active: true, onClick: onClickHandler });
                win.center();
                win.show();
            };
            return module;
        })();
        var SectionCheckboxes = (function () {
            function addCheckbox(group, key) {
                var checkbox = UI.addCheckbox(group, undefined, { key: key, text: checkboxes[key], value: Settinger.get(key) });
                allCheckboxes.push(checkbox);
                return checkbox;
            }
            var allCheckboxes = [];
            var checkboxes = { affectLockedLayers: "Select locked layers", appendToSelection: "Append to selection when selecting", showFilterButton: "Show filter button", showTooltip: "Show label name in tooltip" };
            var module = {};
            module.init = function (parentGroup) {
                allCheckboxes = [];
                var grpContainer = UI.addColumn(parentGroup, { alignChildren: ["fill", "top"], alignment: ["left", "fill"], spacing: 5 });
                ObjectEx.forOwn(checkboxes, function (_value, key) {
                    addCheckbox(grpContainer, key);
                });
            };
            module.getCheckboxes = function () {
                return allCheckboxes;
            };
            module.resetToDefaultValues = function () {
                ArrayEx.forEach(allCheckboxes, function (checkbox) {
                    checkbox.value = Settinger.getDefault(checkbox.key);
                });
            };
            return module;
        })();
        var SectionFooter = (function () {
            function addInfoBlock(container) {
                var group = UI.addRow(container);
                var grpTxt = UI.addColumn(group, { alignChildren: ["left", "top"], spacing: UIConfig.minSpacing });
                var stRegistration = UI.addStaticText(grpTxt, Licensing.getRegistration());
                UI.addCheckbox(grpTxt, undefined, {
                    onClick: function () {
                        Licensing.doUpdateCheck(this.value);
                    }, text: "Check for updates automatically", value: Licensing.getUpdateCheckStatus()
                });
                UI.addStaticText(grpTxt, undefined, { text: ScriptConfig.get("name") + " v" + ScriptConfig.get("version") + " developed by " + ScriptConfig.get("developer") + ", " + ScriptConfig.get("developerURL") });
                if (!Licensing.isTrial()) {
                    UI.addButton(group, undefined, {
                        alignment: ["right", "top"], onClick: function () {
                            if (Licensing.removeLicense()) {
                                stRegistration.text = Licensing.getRegistration();
                                this.visible = false;
                            }
                        }, text: "Deactivate license"
                    });
                }
            }
            function addButtons(container) {
                var group = UI.addRow(container, { spacing: UIConfig.minSpacing });
                UI.addButton(group, "?", { helpTip: "Documentation", onClick: FooterController.openDocumentation, preferredSize: [28, 28] });
                UI.addButton(group, "Get support", { onClick: FooterController.openSupportTicket });
                UI.addButton(group, "Other products", { onClick: FooterController.openPortfolio });
                var btnSaveSettings = UI.addButton(group, "Save settings", {
                    active: true, alignment: ["right", "fill"], onClick: function () {
                        if (FooterController.save()) {
                            UI.getWindowFromChild(group).close();
                        }
                    }
                });
                btnSaveSettings.preferredSize.width = 150;
            }
            var module = {};
            module.init = function (parentGroup) {
                var grpContainer = UI.addColumn(parentGroup, { alignChildren: ["fill", "top"], margins: [10, 20, 10, 10] });
                addInfoBlock(grpContainer);
                addButtons(grpContainer);
            };
            return module;
        })();
        var SectionHeader = (function () {
            function addSwatches(container, labels) {
                return ArrayEx.map(labels, function (label) {
                    var button = UI.addRow(container, { alignment: ["fill", "fill"], onDraw: UI.onDraw });
                    button.preferredSize.height = 10;
                    HeaderController.setColor(button, label.color);
                    return button;
                });
            }
            var module = {};
            module.init = function (parentGroup) {
                buttons = addSwatches(UI.addRow(parentGroup, { spacing: 0 }), LabelObject.getThemeOnLoad().labels);
            };
            module.getButtons = function () {
                return buttons;
            };
            return module;
        })();
        var SectionKeys = (function () {
            function createElement(container, element) {
                var row = UI.addRow(container, { alignChildren: ["fill", "bottom"], enabled: typeof element.enabled !== "undefined" ? element.enabled : true });
                if (element.marginBottom) {
                    row.margins.bottom = element.marginBottom;
                }
                var checkbox = UI.addCheckbox(row, undefined, {
                    onClick: function () {
                        edittext.enabled = this.value;
                    }, text: element.name, value: Settinger.get(element.checkbox.settings)
                });
                checkbox.preferredSize.width = UIConfig.checkboxWidth;
                var edittext = UI.addEditText(row, { enabled: checkbox.value, helpTip: "Keyboard key to execute \"" + checkbox.text + "\"", text: keysToString(Settinger.get(element.edittext.settings)) });
                edittext.preferredSize.width = UIConfig.shortcutWidth;
                element.checkbox.element = checkbox;
                element.edittext.element = edittext;
            }
            function keysToString(string) {
                return Keys.keysToString(Keys.namesToSigns(string));
            }
            var uiElements = [{ checkbox: { element: undefined, settings: "keySetColorEnabled" }, edittext: { element: undefined, settings: "keySetColor" }, name: "Set color" }, { checkbox: { element: undefined, settings: "keyAffectBothEnabled" }, edittext: { element: undefined, settings: "keyAffectBoth" }, name: "Affect layer & item" }, { checkbox: { element: undefined, settings: "keyTargetKeyframesEnabled" }, edittext: { element: undefined, settings: "keyTargetKeyframes" }, enabled: Ae.supportsKeyframeLabels(), marginBottom: 5, name: "Target keyframes" }, { checkbox: { element: undefined, settings: "keySelectEnabled" }, edittext: { element: undefined, settings: "keySelect" }, name: "Select label group" }, { checkbox: { element: undefined, settings: "keyRemoveEnabled" }, edittext: { element: undefined, settings: "keyRemove" }, marginBottom: 5, name: "Remove from sel." }, { checkbox: { element: undefined, settings: "keyOpenEditorEnabled" }, edittext: { element: undefined, settings: "keyOpenEditor" }, name: "Open swatch editor" }];
            var module = {};
            module.init = function (parentGroup) {
                ArrayEx.forEach(uiElements, function (element) {
                    createElement(parentGroup, element);
                });
            };
            module.getUiElements = function () {
                return uiElements;
            };
            module.resetToDefaultValues = function () {
                ArrayEx.forEach(uiElements, function (element) {
                    element.checkbox.element.value = Settinger.getDefault(element.checkbox.settings);
                    element.edittext.element.text = keysToString(Settinger.getDefault(element.edittext.settings));
                    element.edittext.element.enabled = element.checkbox.element.value;
                });
            };
            return module;
        })();
        var SectionTheme = (function () {
            function buttons_add(container) {
                var grpButtons = UI.addRow(container, { spacing: UIConfig.minSpacing });
                grpButtons.margins.bottom = 10;
                ObjectEx.forOwn(buttons, function (value, key) {
                    var button = UI.addButton(grpButtons, undefined, { helpTip: value.helpTip, onClick: value.onClick, preferredSize: [54, 22], text: value.text });
                    buttons[key].button = button;
                });
            }
            function buttons_update() {
                var theme = LabelObject.getSelectedTheme();
                buttons.save_.button.enabled = false;
                buttons.delete_.button.enabled = true;
                buttons.import_.button.enabled = true;
                buttons.export_.button.enabled = true;
                if (theme.isCustom) {
                    buttons.save_.button.enabled = true;
                    buttons.delete_.button.enabled = false;
                    buttons.import_.button.enabled = true;
                    buttons.export_.button.enabled = false;
                }
                if (theme.isDefault) {
                    buttons.save_.button.enabled = false;
                    buttons.delete_.button.enabled = false;
                    buttons.import_.button.enabled = true;
                    buttons.export_.button.enabled = false;
                }
            }
            function details_add(container) {
                ObjectEx.forOwn(details, function (value, key) {
                    var group = UI.addRow(container, { spacing: 2 });
                    UI.addStaticText(group, value.name + ":");
                    details[key].statictext = UI.addStaticText(group, undefined, { alignment: ["fill", "top"] });
                });
                UI.setElementColor(details.url.statictext, Color.hexColorToAdobeRGB(ColorConfig.get("regular")));
                var events = ["mouseover", "mousedown", "mouseout"];
                ArrayEx.forEach(events, function (event) {
                    details.url.statictext.addEventListener(event, mouseListeners);
                });
            }
            function details_update() {
                var theme = LabelObject.getSelectedTheme();
                details.designer.statictext.text = (theme.designer) || ("");
                details.url.statictext.text = (theme.url) || ("");
            }
            function dropdown_add(container) {
                var group = UI.addRow(container);
                group.margins.bottom = 5;
                UI.addStaticText(group, "Theme").preferredSize.width = 45;
                dropdown = group.add("dropdownlist");
                dropdown.alignment = ["fill", "top"];
                dropdown.onChange = dropdown_onChange;
            }
            function dropdown_update() {
                dropdown.removeAll();
                ArrayEx.forEach(ThemeCacher.getThemeNames(), function (name) {
                    dropdown.add("item", name);
                });
            }
            function dropdown_onChange() {
                dropdown.active = true;
                var name = dropdown.selection.text;
                var theme = ThemeCacher.haveTheme(name) ? ThemeCacher.getTheme(name) : LabelObject.getThemeOnLoad();
                LabelObject.setSelectedTheme(theme);
                HeaderController.setTheme(theme);
                details_update();
                buttons_update();
            }
            function dropdown_selectString(string) {
                var item = dropdown.find(string);
                if (item) {
                    dropdown.selection = item.index;
                }
            }
            function mouseListeners(event) {
                var eventType = event.type;
                var element = event.target;
                if (eventType === "mouseover") {
                    color = Color.hexColorToAdobeRGB(ColorConfig.get("over"));
                }
                else if (eventType === "mousedown") {
                    if (element.text === "") {
                        return;
                    }
                    color = Color.hexColorToAdobeRGB(ColorConfig.get("over"));
                    Os.openURL(element.text);
                }
                else {
                    if (eventType === "mouseout") {
                        color = Color.hexColorToAdobeRGB(ColorConfig.get("regular"));
                    }
                }
                UI.setElementColor(element, color);
            }
            var buttons = {
                delete_: {
                    button: undefined, helpTip: "Delete selected theme from list", onClick: function () {
                        var selectedIndex = dropdown.selection.index;
                        var success = ThemeController.deleteTheme(dropdown.selection.text);
                        if (success) {
                            ThemeCacher.init();
                            dropdown_update();
                            if (selectedIndex > (dropdown.items.length - 1)) {
                                selectedIndex = dropdown.items.length - 1;
                            }
                            dropdown.selection = selectedIndex;
                        }
                    }, text: "Delete"
                }, export_: {
                    button: undefined, helpTip: "Export selected theme", onClick: function () {
                        ThemeController.exportTheme(dropdown.selection.text);
                    }, text: "Export"
                }, import_: {
                    button: undefined, helpTip: "Import new theme", onClick: function () {
                        var file = ThemeController.importTheme();
                        if (file) {
                            ThemeCacher.init();
                            dropdown_update();
                            dropdown_selectString(FileEx.getBaseName(file));
                        }
                    }, text: "Import"
                }, save_: {
                    button: undefined, helpTip: "Save current Labels settings to theme", onClick: function () {
                        var file = ThemeController.saveTheme();
                        if (file) {
                            ThemeCacher.init();
                            dropdown_update();
                            dropdown_selectString(FileEx.getBaseName(file));
                        }
                    }, text: "Save"
                }
            };
            var details = { designer: { name: "Designer", statictext: undefined }, url: { name: "URL", statictext: undefined } };
            var module = {};
            module.init = function (parentGroup) {
                var grpContainer = UI.addColumn(parentGroup, { alignChildren: ["fill", "top"], spacing: UIConfig.minSpacing });
                dropdown_add(grpContainer);
                dropdown_update();
                dropdown_selectString(ThemeCacher.getAeThemeName());
                buttons_add(grpContainer);
                buttons_update();
                details_add(grpContainer);
                details_update();
            };
            return module;
        })();
        if (Licensing.gatekeeperPass()) {
            if (Licensing.isTrial()) {
                Licensing.trial.showMessage();
            }
            Settinger.init(Config.settings, ScriptConfig.get("name") + " v4");
            LabelObject.init();
            CustomScriptsUI.init();
            MainUI.show(thisObj);
        }
    } catch (error) {
        ErrorHandler.show(error);
    }
}(this);