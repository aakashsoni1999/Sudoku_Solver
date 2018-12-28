function Clear()
{
    var clear_board=new Array(9);
    for(var i=0;i<9;++i)
    {
        clear_board[i]=new Array(9);
        for(var j=0;j<9;++j)
        {
            clear_board[i][j]="";
        }
    }
    fill_sudoku(clear_board);
    hide();
}

function row_check(mat,r,c,num)
{
    for(var i=0;i<9;++i)
    {
        if(c==i) continue;
        if((mat[r][i]==num))
        return true;
    }
    return false;
}

function column_check(mat,r,c,num)
{
    for(var i=0;i<9;++i)
    {
        if(r==i) continue;
        if((mat[i][c]==num))
        return true;
    }
    return false;
}

function box_check(mat,r1,c1,num)
{
    var r=r1-r1%3;
    var c=c1-c1%3;
    for(var i=0;i<3;++i)
    {
        for(var j=0;j<3;++j)
        {
            if((r+i==r1)&&(c+j==c1)) continue;
            if(mat[r+i][c+j]==num)
            return true;
        }
    }
    return false;
}

function iscomplete(mat,row,column)
{
    for(row[0]=0;row[0]<9;++row[0])
    {
        for(column[0]=0;column[0]<9;++column[0])
        {
            if(mat[row[0]][column[0]]==0)
            return true;
        }
    }
    return false;
}

function issafe(mat,r,c,num)
{
    return ((!row_check(mat,r,c,num))&&(!column_check(mat,r,c,num))&&(!box_check(mat,r,c,num))&&(mat[r][c]==0));
}

function solve_sudoku(mat)
{
    var row=[0],column=[0];
    if(!iscomplete(mat,row,column))
    return true;

    for(var i=1;i<=9;++i)
    {
        if(issafe(mat,row[0],column[0],i))
        {
            mat[row[0]][column[0]]=i;
            if(solve_sudoku(mat))
            return true;
            mat[row[0]][column[0]]=0;
        }
    }
    return false;
}

function check(mat)
{
    for(var i=0;i<9;++i)
    {
        for(var j=0;j<9;++j)
        {
            if(mat[i][j]!=0)
            {
                if(row_check(mat,i,j,mat[i][j])||column_check(mat,i,j,mat[i][j])||box_check(mat,i,j,mat[i][j]))
                return false;
            }
        }
    }
    return true;
}

function fill_sudoku(mat)
{
    document.getElementById("mat00").value=mat[0][0].toString();
    document.getElementById("mat01").value=mat[0][1].toString();
    document.getElementById("mat02").value=mat[0][2].toString();
    document.getElementById("mat03").value=mat[0][3].toString();
    document.getElementById("mat04").value=mat[0][4].toString();
    document.getElementById("mat05").value=mat[0][5].toString();
    document.getElementById("mat06").value=mat[0][6].toString();
    document.getElementById("mat07").value=mat[0][7].toString();
    document.getElementById("mat08").value=mat[0][8].toString();

    document.getElementById("mat10").value=mat[1][0].toString();
    document.getElementById("mat11").value=mat[1][1].toString();
    document.getElementById("mat12").value=mat[1][2].toString();
    document.getElementById("mat13").value=mat[1][3].toString();
    document.getElementById("mat14").value=mat[1][4].toString();
    document.getElementById("mat15").value=mat[1][5].toString();
    document.getElementById("mat16").value=mat[1][6].toString();
    document.getElementById("mat17").value=mat[1][7].toString();
    document.getElementById("mat18").value=mat[1][8].toString();

    document.getElementById("mat20").value=mat[2][0].toString();
    document.getElementById("mat21").value=mat[2][1].toString();
    document.getElementById("mat22").value=mat[2][2].toString();
    document.getElementById("mat23").value=mat[2][3].toString();
    document.getElementById("mat24").value=mat[2][4].toString();
    document.getElementById("mat25").value=mat[2][5].toString();
    document.getElementById("mat26").value=mat[2][6].toString();
    document.getElementById("mat27").value=mat[2][7].toString();
    document.getElementById("mat28").value=mat[2][8].toString();

    document.getElementById("mat30").value=mat[3][0].toString();
    document.getElementById("mat31").value=mat[3][1].toString();
    document.getElementById("mat32").value=mat[3][2].toString();
    document.getElementById("mat33").value=mat[3][3].toString();
    document.getElementById("mat34").value=mat[3][4].toString();
    document.getElementById("mat35").value=mat[3][5].toString();
    document.getElementById("mat36").value=mat[3][6].toString();
    document.getElementById("mat37").value=mat[3][7].toString();
    document.getElementById("mat38").value=mat[3][8].toString();

    document.getElementById("mat40").value=mat[4][0].toString();
    document.getElementById("mat41").value=mat[4][1].toString();
    document.getElementById("mat42").value=mat[4][2].toString();
    document.getElementById("mat43").value=mat[4][3].toString();
    document.getElementById("mat44").value=mat[4][4].toString();
    document.getElementById("mat45").value=mat[4][5].toString();
    document.getElementById("mat46").value=mat[4][6].toString();
    document.getElementById("mat47").value=mat[4][7].toString();
    document.getElementById("mat48").value=mat[4][8].toString();

    document.getElementById("mat50").value=mat[5][0].toString();
    document.getElementById("mat51").value=mat[5][1].toString();
    document.getElementById("mat52").value=mat[5][2].toString();
    document.getElementById("mat53").value=mat[5][3].toString();
    document.getElementById("mat54").value=mat[5][4].toString();
    document.getElementById("mat55").value=mat[5][5].toString();
    document.getElementById("mat56").value=mat[5][6].toString();
    document.getElementById("mat57").value=mat[5][7].toString();
    document.getElementById("mat58").value=mat[5][8].toString();

    document.getElementById("mat60").value=mat[6][0].toString();
    document.getElementById("mat61").value=mat[6][1].toString();
    document.getElementById("mat62").value=mat[6][2].toString();
    document.getElementById("mat63").value=mat[6][3].toString();
    document.getElementById("mat64").value=mat[6][4].toString();
    document.getElementById("mat65").value=mat[6][5].toString();
    document.getElementById("mat66").value=mat[6][6].toString();
    document.getElementById("mat67").value=mat[6][7].toString();
    document.getElementById("mat68").value=mat[6][8].toString();

    document.getElementById("mat70").value=mat[7][0].toString();
    document.getElementById("mat71").value=mat[7][1].toString();
    document.getElementById("mat72").value=mat[7][2].toString();
    document.getElementById("mat73").value=mat[7][3].toString();
    document.getElementById("mat74").value=mat[7][4].toString();
    document.getElementById("mat75").value=mat[7][5].toString();
    document.getElementById("mat76").value=mat[7][6].toString();
    document.getElementById("mat77").value=mat[7][7].toString();
    document.getElementById("mat78").value=mat[7][8].toString();

    document.getElementById("mat80").value=mat[8][0].toString();
    document.getElementById("mat81").value=mat[8][1].toString();
    document.getElementById("mat82").value=mat[8][2].toString();
    document.getElementById("mat83").value=mat[8][3].toString();
    document.getElementById("mat84").value=mat[8][4].toString();
    document.getElementById("mat85").value=mat[8][5].toString();
    document.getElementById("mat86").value=mat[8][6].toString();
    document.getElementById("mat87").value=mat[8][7].toString();
    document.getElementById("mat88").value=mat[8][8].toString();
}

function Solve()
{
    var mat=[[0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0]];
    
    if(document.getElementById("mat00").value=="") mat[0][0]=0;
    else mat[0][0]=parseInt(document.getElementById("mat00").value);
    if(document.getElementById("mat01").value=="") mat[0][1]=0;
    else mat[0][1]=parseInt(document.getElementById("mat01").value);
    if(document.getElementById("mat02").value=="") mat[0][2]=0;
    else mat[0][2]=parseInt(document.getElementById("mat02").value);
    if(document.getElementById("mat03").value=="") mat[0][3]=0;
    else mat[0][3]=parseInt(document.getElementById("mat03").value);
    if(document.getElementById("mat04").value=="") mat[0][4]=0;
    else mat[0][4]=parseInt(document.getElementById("mat04").value);
    if(document.getElementById("mat05").value=="") mat[0][5]=0;
    else mat[0][5]=parseInt(document.getElementById("mat05").value);
    if(document.getElementById("mat06").value=="") mat[0][6]=0;
    else mat[0][6]=parseInt(document.getElementById("mat06").value);
    if(document.getElementById("mat07").value=="") mat[0][7]=0;
    else mat[0][7]=parseInt(document.getElementById("mat07").value);
    if(document.getElementById("mat08").value=="") mat[0][8]=0;
    else mat[0][8]=parseInt(document.getElementById("mat08").value);

    if(document.getElementById("mat10").value=="") mat[1][0]=0;
    else mat[1][0]=parseInt(document.getElementById("mat10").value);
    if(document.getElementById("mat11").value=="") mat[1][1]=0;
    else mat[1][1]=parseInt(document.getElementById("mat11").value);
    if(document.getElementById("mat12").value=="") mat[1][2]=0;
    else mat[1][2]=parseInt(document.getElementById("mat12").value);
    if(document.getElementById("mat13").value=="") mat[1][3]=0;
    else mat[1][3]=parseInt(document.getElementById("mat13").value);
    if(document.getElementById("mat14").value=="") mat[1][4]=0;
    else mat[1][4]=parseInt(document.getElementById("mat14").value);
    if(document.getElementById("mat15").value=="") mat[1][5]=0;
    else mat[1][5]=parseInt(document.getElementById("mat15").value);
    if(document.getElementById("mat16").value=="") mat[1][6]=0;
    else mat[1][6]=parseInt(document.getElementById("mat16").value);
    if(document.getElementById("mat17").value=="") mat[1][7]=0;
    else mat[1][7]=parseInt(document.getElementById("mat17").value);
    if(document.getElementById("mat18").value=="") mat[1][8]=0;
    else mat[1][8]=parseInt(document.getElementById("mat18").value);

    if(document.getElementById("mat20").value=="") mat[2][0]=0;
    else mat[2][0]=parseInt(document.getElementById("mat20").value);
    if(document.getElementById("mat21").value=="") mat[2][1]=0;
    else mat[2][1]=parseInt(document.getElementById("mat21").value);
    if(document.getElementById("mat22").value=="") mat[2][2]=0;
    else mat[2][2]=parseInt(document.getElementById("mat22").value);
    if(document.getElementById("mat23").value=="") mat[2][3]=0;
    else mat[2][3]=parseInt(document.getElementById("mat23").value);
    if(document.getElementById("mat24").value=="") mat[2][4]=0;
    else mat[2][4]=parseInt(document.getElementById("mat24").value);
    if(document.getElementById("mat25").value=="") mat[2][5]=0;
    else mat[2][5]=parseInt(document.getElementById("mat25").value);
    if(document.getElementById("mat26").value=="") mat[2][6]=0;
    else mat[2][6]=parseInt(document.getElementById("mat26").value);
    if(document.getElementById("mat27").value=="") mat[2][7]=0;
    else mat[2][7]=parseInt(document.getElementById("mat27").value);
    if(document.getElementById("mat28").value=="") mat[2][8]=0;
    else mat[2][8]=parseInt(document.getElementById("mat28").value);

    if(document.getElementById("mat30").value=="") mat[3][0]=0;
    else mat[3][0]=parseInt(document.getElementById("mat30").value);
    if(document.getElementById("mat31").value=="") mat[3][1]=0;
    else mat[3][1]=parseInt(document.getElementById("mat31").value);
    if(document.getElementById("mat32").value=="") mat[3][2]=0;
    else mat[3][2]=parseInt(document.getElementById("mat32").value);
    if(document.getElementById("mat33").value=="") mat[3][3]=0;
    else mat[3][3]=parseInt(document.getElementById("mat33").value);
    if(document.getElementById("mat34").value=="") mat[3][4]=0;
    else mat[3][4]=parseInt(document.getElementById("mat34").value);
    if(document.getElementById("mat35").value=="") mat[3][5]=0;
    else mat[3][5]=parseInt(document.getElementById("mat35").value);
    if(document.getElementById("mat36").value=="") mat[3][6]=0;
    else mat[3][6]=parseInt(document.getElementById("mat36").value);
    if(document.getElementById("mat37").value=="") mat[3][7]=0;
    else mat[3][7]=parseInt(document.getElementById("mat37").value);
    if(document.getElementById("mat38").value=="") mat[3][8]=0;
    else mat[3][8]=parseInt(document.getElementById("mat38").value);

    if(document.getElementById("mat40").value=="") mat[4][0]=0;
    else mat[4][0]=parseInt(document.getElementById("mat40").value);
    if(document.getElementById("mat41").value=="") mat[4][1]=0;
    else mat[4][1]=parseInt(document.getElementById("mat41").value);
    if(document.getElementById("mat42").value=="") mat[4][2]=0;
    else mat[4][2]=parseInt(document.getElementById("mat42").value);
    if(document.getElementById("mat43").value=="") mat[4][3]=0;
    else mat[4][3]=parseInt(document.getElementById("mat43").value);
    if(document.getElementById("mat44").value=="") mat[4][4]=0;
    else mat[4][4]=parseInt(document.getElementById("mat44").value);
    if(document.getElementById("mat45").value=="") mat[4][5]=0;
    else mat[4][5]=parseInt(document.getElementById("mat45").value);
    if(document.getElementById("mat46").value=="") mat[4][6]=0;
    else mat[4][6]=parseInt(document.getElementById("mat46").value);
    if(document.getElementById("mat47").value=="") mat[4][7]=0;
    else mat[4][7]=parseInt(document.getElementById("mat47").value);
    if(document.getElementById("mat48").value=="") mat[4][8]=0;
    else mat[4][8]=parseInt(document.getElementById("mat48").value);

    if(document.getElementById("mat50").value=="") mat[5][0]=0;
    else mat[5][0]=parseInt(document.getElementById("mat50").value);
    if(document.getElementById("mat51").value=="") mat[5][1]=0;
    else mat[5][1]=parseInt(document.getElementById("mat51").value);
    if(document.getElementById("mat52").value=="") mat[5][2]=0;
    else mat[5][2]=parseInt(document.getElementById("mat52").value);
    if(document.getElementById("mat53").value=="") mat[5][3]=0;
    else mat[5][3]=parseInt(document.getElementById("mat53").value);
    if(document.getElementById("mat54").value=="") mat[5][4]=0;
    else mat[5][4]=parseInt(document.getElementById("mat54").value);
    if(document.getElementById("mat55").value=="") mat[5][5]=0;
    else mat[5][5]=parseInt(document.getElementById("mat55").value);
    if(document.getElementById("mat56").value=="") mat[5][6]=0;
    else mat[5][6]=parseInt(document.getElementById("mat56").value);
    if(document.getElementById("mat57").value=="") mat[5][7]=0;
    else mat[5][7]=parseInt(document.getElementById("mat57").value);
    if(document.getElementById("mat58").value=="") mat[5][8]=0;
    else mat[5][8]=parseInt(document.getElementById("mat58").value);

    if(document.getElementById("mat60").value=="") mat[6][0]=0;
    else mat[6][0]=parseInt(document.getElementById("mat60").value);
    if(document.getElementById("mat61").value=="") mat[6][1]=0;
    else mat[6][1]=parseInt(document.getElementById("mat61").value);
    if(document.getElementById("mat62").value=="") mat[6][2]=0;
    else mat[6][2]=parseInt(document.getElementById("mat62").value);
    if(document.getElementById("mat63").value=="") mat[6][3]=0;
    else mat[6][3]=parseInt(document.getElementById("mat63").value);
    if(document.getElementById("mat64").value=="") mat[6][4]=0;
    else mat[6][4]=parseInt(document.getElementById("mat64").value);
    if(document.getElementById("mat65").value=="") mat[6][5]=0;
    else mat[6][5]=parseInt(document.getElementById("mat65").value);
    if(document.getElementById("mat66").value=="") mat[6][6]=0;
    else mat[6][6]=parseInt(document.getElementById("mat66").value);
    if(document.getElementById("mat67").value=="") mat[6][7]=0;
    else mat[6][7]=parseInt(document.getElementById("mat67").value);
    if(document.getElementById("mat68").value=="") mat[6][8]=0;
    else mat[6][8]=parseInt(document.getElementById("mat68").value);

    if(document.getElementById("mat70").value=="") mat[7][0]=0;
    else mat[7][0]=parseInt(document.getElementById("mat70").value);
    if(document.getElementById("mat71").value=="") mat[7][1]=0;
    else mat[7][1]=parseInt(document.getElementById("mat71").value);
    if(document.getElementById("mat72").value=="") mat[7][2]=0;
    else mat[7][2]=parseInt(document.getElementById("mat72").value);
    if(document.getElementById("mat73").value=="") mat[7][3]=0;
    else mat[7][3]=parseInt(document.getElementById("mat73").value);
    if(document.getElementById("mat74").value=="") mat[7][4]=0;
    else mat[7][4]=parseInt(document.getElementById("mat74").value);
    if(document.getElementById("mat75").value=="") mat[7][5]=0;
    else mat[7][5]=parseInt(document.getElementById("mat75").value);
    if(document.getElementById("mat76").value=="") mat[7][6]=0;
    else mat[7][6]=parseInt(document.getElementById("mat76").value);
    if(document.getElementById("mat77").value=="") mat[7][7]=0;
    else mat[7][7]=parseInt(document.getElementById("mat77").value);
    if(document.getElementById("mat78").value=="") mat[7][8]=0;
    else mat[7][8]=parseInt(document.getElementById("mat78").value);

    if(document.getElementById("mat80").value=="") mat[8][0]=0;
    else mat[8][0]=parseInt(document.getElementById("mat80").value);
    if(document.getElementById("mat81").value=="") mat[8][1]=0;
    else mat[8][1]=parseInt(document.getElementById("mat81").value);
    if(document.getElementById("mat82").value=="") mat[8][2]=0;
    else mat[8][2]=parseInt(document.getElementById("mat82").value);
    if(document.getElementById("mat83").value=="") mat[8][3]=0;
    else mat[8][3]=parseInt(document.getElementById("mat83").value);
    if(document.getElementById("mat84").value=="") mat[8][4]=0;
    else mat[8][4]=parseInt(document.getElementById("mat84").value);
    if(document.getElementById("mat85").value=="") mat[8][5]=0;
    else mat[8][5]=parseInt(document.getElementById("mat85").value);
    if(document.getElementById("mat86").value=="") mat[8][6]=0;
    else mat[8][6]=parseInt(document.getElementById("mat86").value);
    if(document.getElementById("mat87").value=="") mat[8][7]=0;
    else mat[8][7]=parseInt(document.getElementById("mat87").value);
    if(document.getElementById("mat88").value=="") mat[8][8]=0;
    else mat[8][8]=parseInt(document.getElementById("mat88").value);


    if(check(mat)==true){
    if(solve_sudoku(mat))
    {
        var e=document.getElementById("warning");
        e.style.display="none";
        fill_sudoku(mat);
    }
    else
    {
        var e=document.getElementById("warning");
        e.style.display="block";
    }
}
    else
    {
        var e=document.getElementById("warning");
        e.style.display="block";
    }

    for(var i=0;i<9;++i)
    console.log(mat[i]);
}

function hide()
{
    var e=document.getElementById("warning");
    e.style.display="none";
}