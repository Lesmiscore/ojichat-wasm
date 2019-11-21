package main

import(
    "fmt"
    "github.com/greymd/ojichat/generator"
    "syscall/js"
)

func ojichat(this js.Value, i []js.Value) (interface {}){
    config := generator.Config{}
    if len(i) >= 1 {
        jsCfg := i[0]
        targetName := jsCfg.Get("targetName")
        emojiNum := jsCfg.Get("emojiNum")
        punctuationLevel := jsCfg.Get("punctuationLevel")
        if targetName.Type() == js.TypeString && targetName.Truthy() {
            config.TargetName = targetName.String()
        }
        if emojiNum.Type() == js.TypeNumber {
            config.EmojiNum = emojiNum.Int()
        }
        if punctuationLevel.Type() == js.TypeNumber {
            config.PunctiuationLevel = punctuationLevel.Int()
        }
    }
    result, err := generator.Start(config)
    jsResult := js.Global().Get("Object").New()
    jsResult.Set("result", result)
    if err != nil {
        jsResult.Set("error", err.Error())
    }
    return jsResult
}

func registerCallbacks() {
    js.Global().Set("ojichat", js.FuncOf(ojichat))
}

func main(){
    c := make(chan struct{}, 0)
    registerCallbacks()
    fmt.Println("loaded")
    /*
    r, _ := generator.Start(generator.Config{})
    fmt.Printf("%s\n", r)
    */
    <-c
}
